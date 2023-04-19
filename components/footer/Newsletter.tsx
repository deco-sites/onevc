import Button from "deco-sites/onevc/components/ui/Button.tsx";
import Container from "deco-sites/onevc/components/ui/Container.tsx";

function Newsletter() {
  return (
    <Container>
      <form
        id="form-newsletter"
        target="_blank"
        class="flex flex-col w-full items-start md:(items-center justify-center flex-row)"
        method="post"
        action="https://oneventures.us18.list-manage.com/subscribe/post?u=d40cb0ee26af0d5f6f1ec9bfa&amp;id=cad1ec8303"
      >
        <p class="text-[20px] leading-[24px] mb-[40px] pr-[50px] md:(mb-0 text-[35px] leading-[43px])">
          <span class="block">Subscribe</span>
          to our <strong>newsletter</strong>
        </p>
        <div class="flex flex-nowrap w-full md:w-auto">
          <input
            class="flex-1 placeholder::text-black w-full px-[20px] border-b-1 border-black text-[14px] font-bold leading-[35px] text-[#222]"
            type="email"
            name="EMAIL"
            placeholder="E-mail"
            required
          />
          <Button
            variant="primary"
            class="text-[12px] leading-[20px] md:text-[17px]"
            type="submit"
          >
            Subscribe
          </Button>
        </div>
      </form>
    </Container>
  );
}

export default Newsletter;
