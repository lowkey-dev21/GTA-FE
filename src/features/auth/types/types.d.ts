export interface InputFieldProps {
  label: string;
  type: string;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  ability: string;
  value: string;
}

export interface CreateUserFormData {
  username: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

export interface LoginUserFormData {
  emailOrUsername: string;
  password: string;
}


export interface UserData {
  username: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  profilePicture: string;
  phone?: string;
  gender?: string;
}

export interface TemplateServerProps {
  desktop?: boolean;
  mobile?: boolean;
  card?: boolean;
  authUser: UserData;
}

export interface UseAuthCheckProps {
  LoadingComponent?: React.ComponentType<any>;
  redirectPath?: string;
  LoadingComponentProps?: Record<string, any>;
  requireAuth?: boolean;
}
