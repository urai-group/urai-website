import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterForm = () => {
  return (
    <form 
      action="https://newsletter.urai-group.org/subscription/form" 
      method="post" 
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
          className="w-full h-9 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Subscribe
        </Button>
      </div>
    </form>
  );
};

export default NewsletterForm;

