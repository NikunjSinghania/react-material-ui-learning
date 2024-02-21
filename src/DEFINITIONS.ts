export interface User {
    name? : string,
    email? : string,
    isLoggedIn : boolean
}

export interface Terms {
    LOGIN : string,
    LOGOUT : string
}

export interface SidePanel {
    SIDEPANEL: string
}

export interface SidePanelCurrent {
    SIDEPANEL : boolean
}