import { DialogsProvider, useDialogs } from './index'

const meta = {
  title: 'Components / DialogSystem',
  component: DialogsProvider,
  decorators: [
    (Story) => (
      <DialogsProvider>
        <Story />
      </DialogsProvider>
    ),
  ],
}

export default meta
export const Basic = () => {
  const dialogs = useDialogs()
  return (
    <div>
      <button onClick={(e) => dialogs.view('Test contents')}>
        view dialog
      </button>
    </div>
  )
}
