-- Create courses table (Prekínder A-G hasta IV Medio F)
CREATE TABLE public.courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  level text NOT NULL, -- 'prekinder', 'kinder', '1_basico', etc.
  section text NOT NULL, -- 'A', 'B', 'C', etc.
  full_name text NOT NULL, -- 'Prekínder A', '5° Básico B', etc.
  goal_amount integer NOT NULL DEFAULT 50000,
  current_amount integer NOT NULL DEFAULT 0,
  houses_donated integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(level, section)
);

-- Create families table (beneficiaries)
CREATE TABLE public.families (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  family_name text NOT NULL,
  location text NOT NULL, -- Región de Chile
  lat numeric,
  lng numeric,
  story text,
  image_url text,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Create donations table
CREATE TABLE public.donations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  donor_name text NOT NULL,
  donor_email text NOT NULL,
  course_id uuid REFERENCES public.courses(id),
  amount integer NOT NULL DEFAULT 50000,
  donation_type text NOT NULL, -- 'family', 'class'
  payment_status text NOT NULL DEFAULT 'pending', -- 'pending', 'completed', 'failed'
  payment_method text, -- 'stripe', 'webpay'
  payment_id text,
  message text,
  family_id uuid REFERENCES public.families(id),
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Create houses table (visual representation)
CREATE TABLE public.houses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  donation_id uuid REFERENCES public.donations(id),
  course_id uuid REFERENCES public.courses(id),
  family_id uuid REFERENCES public.families(id),
  position_index integer NOT NULL, -- Position in the grid
  is_active boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.families ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.houses ENABLE ROW LEVEL SECURITY;

-- Public read access policies
CREATE POLICY "Anyone can view courses"
  ON public.courses FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can view families"
  ON public.families FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can view donations"
  ON public.donations FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can view houses"
  ON public.houses FOR SELECT
  TO public
  USING (true);

-- Insert policy for donations (public can create)
CREATE POLICY "Anyone can create donations"
  ON public.donations FOR INSERT
  TO public
  WITH CHECK (true);

-- Insert sample courses
INSERT INTO public.courses (level, section, full_name) VALUES
  ('prekinder', 'A', 'Prekínder A'),
  ('prekinder', 'B', 'Prekínder B'),
  ('prekinder', 'C', 'Prekínder C'),
  ('prekinder', 'D', 'Prekínder D'),
  ('prekinder', 'E', 'Prekínder E'),
  ('prekinder', 'F', 'Prekínder F'),
  ('prekinder', 'G', 'Prekínder G'),
  ('kinder', 'A', 'Kínder A'),
  ('kinder', 'B', 'Kínder B'),
  ('kinder', 'C', 'Kínder C'),
  ('kinder', 'D', 'Kínder D'),
  ('kinder', 'E', 'Kínder E'),
  ('kinder', 'F', 'Kínder F'),
  ('kinder', 'G', 'Kínder G'),
  ('1_basico', 'A', '1° Básico A'),
  ('1_basico', 'B', '1° Básico B'),
  ('1_basico', 'C', '1° Básico C'),
  ('1_basico', 'D', '1° Básico D'),
  ('1_basico', 'E', '1° Básico E'),
  ('1_basico', 'F', '1° Básico F'),
  ('2_basico', 'A', '2° Básico A'),
  ('2_basico', 'B', '2° Básico B'),
  ('2_basico', 'C', '2° Básico C'),
  ('2_basico', 'D', '2° Básico D'),
  ('2_basico', 'E', '2° Básico E'),
  ('2_basico', 'F', '2° Básico F'),
  ('3_basico', 'A', '3° Básico A'),
  ('3_basico', 'B', '3° Básico B'),
  ('3_basico', 'C', '3° Básico C'),
  ('3_basico', 'D', '3° Básico D'),
  ('3_basico', 'E', '3° Básico E'),
  ('3_basico', 'F', '3° Básico F'),
  ('4_basico', 'A', '4° Básico A'),
  ('4_basico', 'B', '4° Básico B'),
  ('4_basico', 'C', '4° Básico C'),
  ('4_basico', 'D', '4° Básico D'),
  ('4_basico', 'E', '4° Básico E'),
  ('4_basico', 'F', '4° Básico F'),
  ('5_basico', 'A', '5° Básico A'),
  ('5_basico', 'B', '5° Básico B'),
  ('5_basico', 'C', '5° Básico C'),
  ('5_basico', 'D', '5° Básico D'),
  ('5_basico', 'E', '5° Básico E'),
  ('5_basico', 'F', '5° Básico F'),
  ('6_basico', 'A', '6° Básico A'),
  ('6_basico', 'B', '6° Básico B'),
  ('6_basico', 'C', '6° Básico C'),
  ('6_basico', 'D', '6° Básico D'),
  ('6_basico', 'E', '6° Básico E'),
  ('6_basico', 'F', '6° Básico F'),
  ('7_basico', 'A', '7° Básico A'),
  ('7_basico', 'B', '7° Básico B'),
  ('7_basico', 'C', '7° Básico C'),
  ('7_basico', 'D', '7° Básico D'),
  ('7_basico', 'E', '7° Básico E'),
  ('7_basico', 'F', '7° Básico F'),
  ('8_basico', 'A', '8° Básico A'),
  ('8_basico', 'B', '8° Básico B'),
  ('8_basico', 'C', '8° Básico C'),
  ('8_basico', 'D', '8° Básico D'),
  ('8_basico', 'E', '8° Básico E'),
  ('8_basico', 'F', '8° Básico F'),
  ('1_medio', 'A', 'I Medio A'),
  ('1_medio', 'B', 'I Medio B'),
  ('1_medio', 'C', 'I Medio C'),
  ('1_medio', 'D', 'I Medio D'),
  ('1_medio', 'E', 'I Medio E'),
  ('1_medio', 'F', 'I Medio F'),
  ('2_medio', 'A', 'II Medio A'),
  ('2_medio', 'B', 'II Medio B'),
  ('2_medio', 'C', 'II Medio C'),
  ('2_medio', 'D', 'II Medio D'),
  ('2_medio', 'E', 'II Medio E'),
  ('2_medio', 'F', 'II Medio F'),
  ('3_medio', 'A', 'III Medio A'),
  ('3_medio', 'B', 'III Medio B'),
  ('3_medio', 'C', 'III Medio C'),
  ('3_medio', 'D', 'III Medio D'),
  ('3_medio', 'E', 'III Medio E'),
  ('3_medio', 'F', 'III Medio F'),
  ('4_medio', 'A', 'IV Medio A'),
  ('4_medio', 'B', 'IV Medio B'),
  ('4_medio', 'C', 'IV Medio C'),
  ('4_medio', 'D', 'IV Medio D'),
  ('4_medio', 'E', 'IV Medio E'),
  ('4_medio', 'F', 'IV Medio F');

-- Insert sample families
INSERT INTO public.families (family_name, location, lat, lng, story) VALUES
  ('Familia González', 'Región de Valparaíso', -33.0472, -71.6127, 'Una familia de 5 personas que necesita acceso a agua limpia para mejorar su calidad de vida.'),
  ('Familia Silva', 'Región del Maule', -35.4264, -71.6554, 'Padres con 3 niños que caminan 2 km diarios para conseguir agua.'),
  ('Familia Rojas', 'Región del Biobío', -36.8201, -73.0444, 'Familia rural que depende de agua de río contaminada.'),
  ('Familia Muñoz', 'Región de La Araucanía', -38.7359, -72.5904, 'Comunidad indígena que necesita agua segura para su desarrollo.');

-- Initialize 200 houses for the grid visualization
INSERT INTO public.houses (position_index, is_active)
SELECT generate_series(1, 200), false;

-- Function to update course stats when donation is completed
CREATE OR REPLACE FUNCTION update_course_stats()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.payment_status = 'completed' AND OLD.payment_status != 'completed' THEN
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
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_donation_completed
  AFTER UPDATE ON public.donations
  FOR EACH ROW
  EXECUTE FUNCTION update_course_stats();