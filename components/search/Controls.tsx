import Container from "deco-sites/onevc/components/ui/Container.tsx";
import Button from "deco-sites/onevc/components/ui/Button.tsx";
import Icon from "deco-sites/onevc/components/ui/Icon.tsx";
import Filters from "deco-sites/onevc/components/search/Filters.tsx";
import Sort from "deco-sites/onevc/components/search/Sort.tsx";
import Modal from "deco-sites/onevc/components/ui/Modal.tsx";
import Breadcrumb from "deco-sites/onevc/components/ui/Breadcrumb.tsx";
import { useSignal } from "@preact/signals";
import type { ProductListingPage } from "deco-sites/std/commerce/types.ts";

type Props =
  & Pick<ProductListingPage, "filters" | "breadcrumb" | "sortOptions">
  & {
    displayFilter?: boolean;
  };

function SearchControls(
  { filters, breadcrumb, displayFilter, sortOptions }: Props,
) {
  const open = useSignal(false);

  return (
    <div class="flex flex-col justify-between mb-4 p-4 sm:(mb-0 p-0 gap-4 flex-row h-[53px] border-b-1)">
      <div class="flex flex-row items-center sm:p-0 mb-2">
        <Breadcrumb itemListElement={breadcrumb?.itemListElement} />
      </div>

      <div class="flex flex-row items-center justify-between border-b-1 border-default sm:(gap-4 border-none)">
        <Button
          class={displayFilter ? "" : "sm:hidden"}
          variant="tertiary"
          onClick={() => {
            open.value = true;
          }}
        >
          Filtrar
          <Icon id="FilterList" width={16} height={16} />
        </Button>
        {sortOptions.length > 0 && <Sort sortOptions={sortOptions} />}
      </div>

      <Modal
        loading="lazy"
        title="Filtrar"
        mode="sidebar-right"
        open={open.value}
        onClose={() => {
          open.value = false;
        }}
      >
        <Filters filters={filters} />
      </Modal>
    </div>
  );
}

export default SearchControls;
