-- Fix search_path security issue - drop trigger first
DROP TRIGGER IF EXISTS on_donation_completed ON public.donations;
DROP FUNCTION IF EXISTS update_course_stats();

CREATE OR REPLACE FUNCTION update_course_stats()
RETURNS TRIGGER 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  IF NEW.payment_status = 'completed' AND (OLD.payment_status IS NULL OR OLD.payment_status != 'completed') THEN
    UPDATE public.courses
    SET 
      current_amount = current_amount + NEW.amount,
      houses_donated = houses_donated + 1
    WHERE id = NEW.course_id;
    
    -- Activate a house in the grid
    UPDATE public.houses
    SET 
      is_active = true,
      donation_id = NEW.id,
      course_id = NEW.course_id,
      family_id = NEW.family_id
    WHERE id = (
      SELECT id FROM public.houses
      WHERE is_active = false
      ORDER BY position_index
      LIMIT 1
    );
  END IF;
  RETURN NEW;
END;
$$;

-- Recreate the trigger
CREATE TRIGGER on_donation_completed
  AFTER UPDATE ON public.donations
  FOR EACH ROW
  EXECUTE FUNCTION update_course_stats();