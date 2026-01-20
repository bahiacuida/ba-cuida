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
  }
}
