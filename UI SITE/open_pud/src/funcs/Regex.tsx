const userSpecificRegex = /^[a-zA-Z0-9._%+-]+$/;

export const isUserSpecificValid = (userEmail:string) : boolean => {return userSpecificRegex.test(userEmail)}

const emailPathRegex: RegExp = /@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const isDomainvalid = (domainEmail: string): boolean => {return emailPathRegex.test(domainEmail)}