const { z } = require("zod") 

export const params = z.object({
    project_id: z.string(),
});

export const updateProjectSchema = z.object({
    params,
    body: z.object({
        title: z.string(),
        current_number: z.number(),
        number_of_students: z.number(),
        location: z.string(),
        school: z.string(),
        content: z.string(),
        isVerified: z.boolean()
    }).partial()
})

export const ParamsInput = z.TypeOf(params);
export const UpdateNoteInput = z.TypeOf(updateProjectSchema);
