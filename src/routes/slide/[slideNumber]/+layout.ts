import type { LayoutLoad } from './$types'
import { SLIDE_NUMBER_SCHEMA } from './slideNumberSchema'

export const load = (({ params }) => {
    const slideNumber: number = SLIDE_NUMBER_SCHEMA.parse(params.slideNumber)
    return { slideNumber }
}) satisfies LayoutLoad
