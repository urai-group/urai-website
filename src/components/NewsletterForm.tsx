import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const NewsletterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      // We use fetch to submit the form data without navigating away.
      // NOTE: This requires the Listmonk server to have CORS enabled for this domain.
      // If CORS is not enabled, this request might fail or require mode: 'no-cors'.
      const response = await fetch("https://newsletter.urai-group.org/subscription/form", {
        method: "POST",
        body: formData,
      });

      if (response.ok || response.type === 'opaque') {
        toast({
          title: "Successfully subscribed!",
          description: "Please check your inbox to confirm your subscription.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Subscription failed");
      }
    } catch (error) {
      console.error("Newsletter error:", error);
      toast({
        variant: "destructive",
        title: "Subscription failed",
        description: "There was a problem signing you up. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-sm"
    >
      <div className="space-y-1">
        <h3 className="font-semibold text-foreground tracking-wide uppercase text-sm">Newsletter</h3>
        <p className="text-sm text-muted-foreground">
          Subscribe to our bi-weekly newsletter to stay updated on our progress.
        </p>
      </div>

      <div className="space-y-3">
        {/* Listmonk required fields */}
        <input type="hidden" name="nonce" />
        <input 
          type="checkbox" 
          name="l" 
          value="e837e1ff-ca29-4890-a956-7433b4d7b9e6" 
          checked 
          readOnly 
          className="hidden" 
        />

        <Input 
          type="email" 
          name="email" 
          required 
          placeholder="E-mail" 
          className="bg-card/50 border-border/50 focus:border-primary h-9 text-sm"
        />
        <Input 
          type="text" 
          name="name" 
          placeholder="Name (optional)" 
          className="bg-card/50 border-border/50 focus:border-primary h-9 text-sm"
        />
        
        <Button 
          type="submit" 
          variant="secondary"
          disabled={isLoading}
          className="w-full h-9 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          {isLoading ? "Subscribing..." : "Subscribe"}
        </Button>
      </div>
    </form>
  );
};

export default NewsletterForm;

