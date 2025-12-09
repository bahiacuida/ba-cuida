import React from 'react'
import { DIALOGS, createDialogSystem } from '@orioro/react-dialogs'

const [DialogsProvider_, useDialogs] = createDialogSystem({
  dialogs: {
    ...DIALOGS,
  },
})

export function DialogsProvider({ children }) {
  return (
    <DialogsProvider_
      prompt={{
        restore: 'Restaurar',
        cancel: 'Cancelar',
        submit: 'Enviar',
      }}
    >
      {children}
    </DialogsProvider_>
  )
}

export { useDialogs }
