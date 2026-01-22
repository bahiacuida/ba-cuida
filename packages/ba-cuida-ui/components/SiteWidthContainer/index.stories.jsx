import { fn } from 'storybook/test'
import { SiteWidthContainer } from './index'

const meta = {
  title: 'Components / SiteWidthContainer',
  component: SiteWidthContainer,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
}

export default meta
export const Basic = {
  args: {
    children: (
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          finibus lorem non cursus aliquam. Morbi placerat metus non justo
          varius, eget rutrum nibh porttitor. Donec bibendum dui eget nulla
          tempor ullamcorper. Nam accumsan felis non purus bibendum imperdiet.
          Cras a ipsum vitae turpis egestas accumsan quis a diam. Proin
          ullamcorper tortor enim, a vehicula neque iaculis eget. Praesent
          ullamcorper quis nisi id blandit. Nam nec justo sit amet neque egestas
          ultrices ac et velit. Vestibulum eu ex ac lectus volutpat
          sollicitudin. Nullam nec risus ac neque efficitur eleifend. Nulla eu
          bibendum orci. Vestibulum aliquet a felis at auctor. Pellentesque eget
          accumsan elit, id pretium ante. Suspendisse condimentum purus orci, in
          hendrerit ligula fringilla tincidunt. Nam a bibendum arcu.
        </p>
        <p>
          Ut nunc elit, commodo nec fermentum vitae, tincidunt pellentesque
          enim. Cras quam urna, luctus non metus quis, tincidunt malesuada leo.
          Morbi sagittis nibh eleifend odio tincidunt, quis ullamcorper magna
          placerat. Aliquam finibus id eros a scelerisque. In vestibulum
          dignissim tellus. Ut fringilla elit quis arcu mattis convallis. Aenean
          suscipit odio id leo luctus, sed accumsan lacus gravida. Nunc gravida
          sapien urna, ac dictum elit tincidunt nec. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Phasellus semper sapien nec rhoncus scelerisque. Proin vel dapibus
          nisl, in lacinia elit. Phasellus pulvinar facilisis mi, sit amet porta
          justo aliquet eget. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Etiam ut rutrum elit.
        </p>
        <p>
          Cras ac pretium magna, quis iaculis ligula. Fusce ut nibh mauris.
          Suspendisse eu hendrerit sapien, et dictum arcu. Proin venenatis
          lectus odio, sed laoreet erat rutrum ultricies. Praesent fermentum
          tempus metus. Proin vitae finibus dui. Curabitur pulvinar in neque
          suscipit laoreet. Proin rutrum eros odio. Suspendisse vitae cursus
          risus, eget facilisis augue. Aenean ut porttitor elit. Integer
          tristique lorem eget leo condimentum tincidunt. Etiam accumsan odio et
          orci rhoncus viverra. Praesent odio enim, faucibus a augue non,
          ultricies condimentum leo. Vivamus laoreet dui et turpis porttitor
          ultricies elementum vel sapien.
        </p>
        <p>
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas
          neque felis, vestibulum sit amet accumsan vel, facilisis vitae ligula.
          Nulla facilisis malesuada lectus, ac porttitor massa consectetur
          pulvinar. Mauris dignissim fermentum arcu, aliquet fringilla turpis
          euismod nec. Nulla faucibus a nisl non fringilla. Nullam semper augue
          vitae quam tincidunt, eu iaculis lorem ultricies. Nulla vel magna at
          est ultricies elementum. In vitae tortor scelerisque, varius magna et,
          tincidunt nunc. Aliquam in urna laoreet, scelerisque odio sit amet,
          dapibus neque. Duis neque libero, viverra sed lorem sit amet, tempus
          interdum lorem. Sed pellentesque pulvinar mollis. Donec semper finibus
          erat. Fusce rhoncus velit eget turpis faucibus gravida. Vestibulum ac
          ex ac nunc feugiat facilisis. Quisque faucibus nisl sit amet lectus
          dignissim ultrices.
        </p>
        <p>
          Curabitur volutpat mi sem, vitae commodo odio condimentum id. Duis id
          dui eu quam commodo sollicitudin ut sed tortor. Nullam accumsan
          tincidunt tellus. Sed vel felis in metus auctor volutpat vel eu neque.
          Nam eget cursus sapien. Nulla ligula metus, aliquam nec mi non,
          porttitor imperdiet diam. Nam congue ornare tortor id luctus. Mauris
          feugiat malesuada ultrices. Nam quis magna nunc. Pellentesque id
          dapibus tortor, ac dignissim eros.
        </p>
      </div>
    ),
  },
}
