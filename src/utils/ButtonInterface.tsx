
export interface authProp {
    setUser: React.Dispatch<React.SetStateAction<RegisterFormData | null>>;
}

export interface ButtonProps {
  variant: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  text: string;
  onClick?: () => void;
  className : string
  type ?: "button" | "submit" | "reset" | undefined;
}
export interface RegisterFormData {
    name: string;
    phoneNumber: string;
    email: string;
    password: string;
    companyName?: string;
    isAgency: "yes" | "no";
}