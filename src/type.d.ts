type Role = "SUPERUSER" | "ADMIN" | "USER";

interface SelectedOption {
  value: string;
  label: string;
}

type TChildren = {
  children: ReactNode;
};

interface IThemeContext {
  isDark: boolean;
  toggleTheme: () => void;
}

interface AuthContextType {
  auth: IAuth | null;
  setAuth: React.Dispatch<React.SetStateAction<IAuth | null>>;
  persist: boolean;
  setPersist: (value: boolean) => void;
}

interface IAuth {
  user: string;
  pwd: string;
  roles: Role;
  accessToken: string;
}
type TAllowRoles = {
  allowedRoles: string[];
};

/*=========================================
                                            
              Responses

=========================================*/

type Sort = {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
};

type Pageable = {
  sort: Sort;
  pageNumber: number;
  pageSize: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
};

type ResponseBody<T> = {
  content: T[];
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  size: number;
  number: number;
  empty: boolean;
};

type ResponseData<T> = {
  timestamp: string;
  body: ResponseBody<T>;
  is_successful: boolean;
};

type ResponseDataNoPagination<T> = {
  timestamp: string;
  body: T[];
  is_successful: boolean;
};

type ResponseDataNoArray<T> = {
  timestamp: string;
  body: T;
  is_successful: boolean;
};

type User = {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  mobile: string;
  email: string | null;
  national_code: null | string;
  status: string;
  last_login_at: string;
  voucher:string;
};

type Transaction = {
  id: number;
  amount: number;
  currency: null;
  status: "created" | "gatewayInit" | "paid" | "reversed" | "success";
  gateway_type: "ezpay";
  created_at: string;
};

type IAutomaticRegistration = {
  keyName: string;
  value: string;
  type: string;
};
type IFieldConfig = {
  fieldName: string;
  readOnly: boolean;
  mandatory: boolean;
  available: boolean;
};

interface IBanner {
  id: number;
  name: string;
  width: number;
  height: number;
  position: "UP" | "MID" | "BOT" | "";
  firstB64Image: string;
  enable: boolean;
}
interface IBannerPUT {
  id: number;
  height: number;
  position: "UP" | "MID" | "BOT" | "";
  enable: boolean;
  banner_name: string;
  actionType: "delete" | "activate" | "";
}
interface IBannerImg extends IBanner {
  b64Images: string[];
}

/*=========================================
                                            
              packages

=========================================*/
interface MyJwtPayload extends JwtPayload {
  id: string | null;
  email: string | null;
  mobile: string | null;
  roles: Role[];
}
