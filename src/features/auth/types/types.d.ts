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
