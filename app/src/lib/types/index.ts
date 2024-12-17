import { UserLoginInput, UserSignupInput } from "../validations/user.validator";

export interface DefaultContextProps {
    setTheme: (theme: string) => void;
    theme: string;
}
export interface ScriptOptions {
    attribute: string | string[];
    storageKey: string;
    defaultTheme: string;
    forcedTheme?: string;
    themes: string[];
    value?: Record<string, string>;
    enableSystem: boolean;
    enableColorScheme: boolean;
}

export interface ValueObject {
    [themeName: string]: string;
}

export type DataAttribute = `data-${string}`;

export interface ScriptProps
    extends React.DetailedHTMLProps<
        React.ScriptHTMLAttributes<HTMLScriptElement>,
        HTMLScriptElement
    > {
    [dataAttribute: DataAttribute]: any;
}

export interface UseThemeProps {
    themes: string[];
    forcedTheme?: string | undefined;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    theme?: string | undefined;
    resolvedTheme?: string | undefined;
    systemTheme?: "dark" | "light" | undefined;
}

export type Attribute = DataAttribute | "class";

export interface ThemeProviderProps extends React.PropsWithChildren {
    themes?: string[] | undefined;
    forcedTheme?: string | undefined;
    enableSystem?: boolean | undefined;
    disableTransitionOnChange?: boolean | undefined;
    enableColorScheme?: boolean | undefined;
    storageKey?: string | undefined;
    defaultTheme?: string | undefined;
    attribute?: Attribute | Attribute[] | undefined;
    value?: ValueObject | undefined;
    nonce?: string;
    scriptProps?: ScriptProps;
}

export interface ApplyThemeProps {
    theme: string;
    enableSystem: boolean;
    value?: Record<string, string>;
    disableTransitionOnChange: boolean;
    nonce?: string;
    attribute: Attribute | Attribute[];
    enableColorScheme: boolean;
    defaultTheme: string;
    colorSchemes: string[];
    attrs: string[];
}

export interface SetThemeFunction {
    (value: string | ((theme: string) => string)): void;
  }
export interface ParamsType {
    params: any;
}

export interface QueryType {
    query: any;
}

export interface postMethodAPIType {
    url: string;
    data: UserLoginInput | UserSignupInput;
}