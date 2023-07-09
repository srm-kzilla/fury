export enum Domain {
    Technical = "technical",
    Technical_Project = "technicalp",
    VFX = "vfx",
    GFX = "gfx",
    Content_Writing = "content_writing",
    Events = "events",
    Corporate = "corporate",
}

export function getDomainName(domain: string) {
    switch (domain) {
        case Domain.Technical_Project:
            return "Technical";
        case Domain.Technical:
            return "Technical";
        case Domain.VFX:
            return "VFX";
        case Domain.GFX:
            return "GFX";
        case Domain.Content_Writing:
            return "Content Writing";
        case Domain.Events:
            return "Events";
        case Domain.Corporate:
            return "Corporate";
        default:
            return undefined;
    }
}
