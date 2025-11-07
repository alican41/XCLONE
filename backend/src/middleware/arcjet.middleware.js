import { aj } from "../config/arcjet.js"

export const arcjetMiddleware = async (req, res, next) => {
    try {
        const decision = await aj.protect(req, {
            requested: 1
        })

        if (decision.isDenied()) {
            if (decision.reason.isRateLimit()) {
                return res.status(429).json({ 
                    error: "Too many requests.",
                    message: "Please try again later." })
            } else if (decision.reason.isBot()) {
                return res.status(403).json({ 
                    error: "Bots access denied.",
                    message: "Automated requests are not allowed." })
            } else {
                return res.status(403).json({ 
                    error: "Access denied.",
                    message: "Your request was blocked by security policies." })
            }
        }

        if (decision.results.some((result => result.reason.isBot() && result.reason.isSpoofed()))) {
            return res.status(403).json({ 
                error: "Spoofed bot access denied.",
                message: "Your request was blocked due to spoofed bot characteristics." 
            })
        }
        next()
    } catch (error) {
        console.error("Arcjet middleware error:", error)
        next()
    }
}