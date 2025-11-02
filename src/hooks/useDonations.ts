import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export interface Course {
  id: string;
  level: string;
  section: string;
  full_name: string;
  goal_amount: number;
  current_amount: number;
  houses_donated: number;
}

export interface Family {
  id: string;
  family_name: string;
  location: string;
  lat: number | null;
  lng: number | null;
  story: string | null;
}

export interface Donation {
  id: string;
  donor_name: string;
  donor_email: string;
  course_id: string | null;
  amount: number;
  donation_type: string;
  payment_status: string;
  message: string | null;
  family_id: string | null;
  created_at: string;
  courses?: Course;
  families?: Family;
}

export interface House {
  id: string;
  position_index: number;
  is_active: boolean;
  donation_id: string | null;
  course_id: string | null;
  family_id: string | null;
  courses?: Course;
  families?: Family;
}

export const useCourses = () => {
  return useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("courses")
        .select("*")
        .order("level", { ascending: true })
        .order("section", { ascending: true });
      
      if (error) throw error;
      return data as Course[];
    },
  });
};

export const useFamilies = () => {
  return useQuery({
    queryKey: ["families"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("families")
        .select("*");
      
      if (error) throw error;
      return data as Family[];
    },
  });
};

export const useDonations = () => {
  return useQuery({
    queryKey: ["donations"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("donations")
        .select(`
          *,
          courses(*),
          families(*)
        `)
        .eq("payment_status", "completed")
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      return data as Donation[];
    },
  });
};

export const useHouses = () => {
  return useQuery({
    queryKey: ["houses"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("houses")
        .select(`
          *,
          courses(*),
          families(*)
        `)
        .order("position_index", { ascending: true });
      
      if (error) throw error;
      return data as House[];
    },
  });
};

export const useCreateDonation = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (donation: {
      donor_name: string;
      donor_email: string;
      course_id: string | null;
      amount: number;
      donation_type: string;
      message?: string;
    }) => {
      const { data, error } = await supabase
        .from("donations")
        .insert([donation])
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["donations"] });
      queryClient.invalidateQueries({ queryKey: ["courses"] });
      queryClient.invalidateQueries({ queryKey: ["houses"] });
      toast.success("Donation created successfully!");
    },
    onError: (error) => {
      toast.error("Error creating donation: " + error.message);
    },
  });
};

export const useUpdateDonationStatus = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ 
      donationId, 
      status, 
      paymentId 
    }: { 
      donationId: string; 
      status: string; 
      paymentId?: string;
    }) => {
      const { data, error } = await supabase
        .from("donations")
        .update({ 
          payment_status: status,
          payment_id: paymentId 
        })
        .eq("id", donationId)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["donations"] });
      queryClient.invalidateQueries({ queryKey: ["courses"] });
      queryClient.invalidateQueries({ queryKey: ["houses"] });
    },
  });
};

export const useGlobalStats = () => {
  return useQuery({
    queryKey: ["global-stats"],
    queryFn: async () => {
      const { data: courses, error: coursesError } = await supabase
        .from("courses")
        .select("current_amount, houses_donated");
      
      if (coursesError) throw coursesError;
      
      const totalAmount = courses?.reduce((sum, course) => sum + course.current_amount, 0) || 0;
      const totalHouses = courses?.reduce((sum, course) => sum + course.houses_donated, 0) || 0;
      
      return {
        totalAmount,
        totalHouses,
        totalGoal: 10000000, // Goal of 10 million
        goalHouses: 200
      };
    },
  });
};
