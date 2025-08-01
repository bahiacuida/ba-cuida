// see https://keystonejs.com/docs/fields/overview for the full list of fields
//   this is a few common fields for an example
import { text, password, select, checkbox, json } from '@keystone-6/core/fields'

export function userListFields() {
  return {
    // by adding isRequired, we enforce that every User should have a name
    //   if no name is provided, an error will be displayed
    // name: text({ validation: { isRequired: true } }),

    email: text({
      validation: { isRequired: true },
      // by adding isIndexed: 'unique', we're saying that no user can have the same
      // email as another user - this may or may not be a good idea for your project
      isIndexed: 'unique',
    }),

    password: password({
      validation: {
        isRequired: true,
        length: {
          min: 4,
          max: 100,
        },
      },
    }),

    avatar: json({
      defaultValue: {},
    }),
    schoolId: text(),
    classroomId: text(),
    studentId: text(),

    notes: json({
      defaultValue: []
    }),

    isSystemAdmin: checkbox({
      defaultValue: false,
      access: {
        //
        // Ensure non-admin cannot transform themselves into admins
        //
        create: () => false,
        read: () => true,
        update: () => false,
      },
    }),

    // // we can use this field to see what Posts this User has authored
    // //   more on that in the Post list below
    // posts: relationship({ ref: 'Post.author', many: true }),

    // createdAt: timestamp({
    //   // this sets the timestamp to Date.now() when the user is first created
    //   defaultValue: { kind: 'now' },
    // }),
  }
}
