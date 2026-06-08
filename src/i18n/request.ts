import { getRequestConfig } from "next-intl/server";
import pt from "../../messages/pt.json"
import en from "../../messages/en.json"

const messageMap = { pt, en } as const

export default getRequestConfig(async ({ requestLocale }) => {
    const locale = ((await requestLocale) ?? 'pt') as keyof typeof messageMap
    return {
        locale,
        messages: messageMap[locale] ?? pt
    }
})