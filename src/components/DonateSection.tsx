import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Heart, Send, Loader2 } from "lucide-react";
import { useCourses, useCreateDonation, useUpdateDonationStatus } from "@/hooks/useDonations";

const DonateSection = () => {
  const { data: courses, isLoading: coursesLoading } = useCourses();
  const createDonation = useCreateDonation();
  const updateDonationStatus = useUpdateDonationStatus();
  
  const [formData, setFormData] = useState({
    donorName: "",
    email: "",
    courseId: "",
    donationType: "class",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Create donation with pending status
      const donation = await createDonation.mutateAsync({
        donor_name: formData.donorName,
        donor_email: formData.email,
        course_id: formData.courseId || null,
        amount: 50000,
        donation_type: formData.donationType,
        message: formData.message || undefined,
      });

      // Simulate payment process (in real implementation, integrate Stripe/Webpay here)
      toast.success("Processing payment...", {
        description: "Redirecting to the payment gateway...",
      });

      // Simulate successful payment after 2 seconds
      setTimeout(async () => {
        await updateDonationStatus.mutateAsync({
          donationId: donation.id,
          status: "completed",
          paymentId: "SIMULATED_PAYMENT_" + Date.now(),
        });
        
        toast.success("Payment completed successfully!", {
          description: "You will receive information about the recipient family soon.",
        });
        
        // Reset form
        setFormData({
          donorName: "",
          email: "",
          courseId: "",
          donationType: "class",
          message: "",
        });
      }, 2000);

    } catch (error) {
      toast.error("There was an error processing the donation");
    }
  };

  return (
    <section id="donate" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Make Your Donation
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your gift will bring clean water to a family in need. Complete the form to get started.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Donation Form */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="donorName">Donor Family/Class Name *</Label>
                  <Input
                    id="donorName"
                    required
                    value={formData.donorName}
                    onChange={(e) => setFormData({ ...formData, donorName: e.target.value })}
                    placeholder="e.g., Gonzalez Family or 5th Grade A"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Contact Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tu@email.com"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="courseId">Select Your Class *</Label>
                  <select
                    id="courseId"
                    required
                    value={formData.courseId}
                    onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}
                    className="w-full mt-2 px-3 py-2 rounded-md border border-input bg-background text-foreground"
                    disabled={coursesLoading}
                  >
                    <option value="">-- Select a class --</option>
                    {courses?.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.full_name} ({course.houses_donated} homes funded)
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="donationType">Donation Type *</Label>
                  <select
                    id="donationType"
                    required
                    value={formData.donationType}
                    onChange={(e) => setFormData({ ...formData, donationType: e.target.value })}
                    className="w-full mt-2 px-3 py-2 rounded-md border border-input bg-background text-foreground"
                  >
                    <option value="class">Class Donation ($50,000)</option>
                    <option value="family">Family Donation ($50,000)</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Message for the Recipient Family (Optional)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share a message of encouragement..."
                    className="mt-2 min-h-[100px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg py-6 group"
                  disabled={createDonation.isPending || updateDonationStatus.isPending}
                >
                  {createDonation.isPending || updateDonationStatus.isPending ? (
                    <>
                      <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Complete Donation
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Info Card */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
                <Heart className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Your Impact</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-2xl">💧</span>
                    <span>3-5 years of clean water for a family</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-2xl">❤️</span>
                    <span>Direct connection with the recipient family</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-2xl">📊</span>
                    <span>Track the ongoing impact of your donation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-2xl">🌍</span>
                    <span>Contribute to the goal of reaching 1 million people</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                <h3 className="text-xl font-bold mb-4 text-foreground">What Happens Next?</h3>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary font-bold">
                      1
                    </div>
                    <p className="text-muted-foreground pt-1">We process your donation and assign a filter</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 text-secondary font-bold">
                      2
                    </div>
                    <p className="text-muted-foreground pt-1">We deliver the filter to a family in need</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 text-accent font-bold">
                      3
                    </div>
                    <p className="text-muted-foreground pt-1">You receive information about the family and can connect with them</p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
