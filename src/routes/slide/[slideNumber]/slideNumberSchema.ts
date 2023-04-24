import { z } from 'zod'

export const SLIDE_NUMBER_SCHEMA = z.coerce.number().finite().int().positive().catch(1)
