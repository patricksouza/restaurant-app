type FABGenericProps = {
  place: string;
  action: string;
};
type AlertGenericProps = {
  message: number;
};

type SearchBarComponentProps = {
  getSearchValue: (value: string) => void;
};

type HeaderGenericProps = {
  isVisible: boolean;
  getChecks: (checks: any) => void;
};

type CardGenericProps = {
  isVisible: boolean;
};

type ModalGenericProps = {
  isVisible: boolean;
  genericFunction: (checks: any) => void;
};

type BottomSheetGenericProps = {
  openBottomSheet: boolean;
  getChecks: (checks: any) => void;
};

export {
  FABGenericProps,
  AlertGenericProps,
  BottomSheetGenericProps,
  HeaderGenericProps,
  SearchBarComponentProps,
  ModalGenericProps,
};
