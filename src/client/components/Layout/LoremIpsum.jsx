import React, { Fragment } from 'react'
import { Page } from './Page'

export const LoremIpsum = ({ page = false }) => {
  const Container = page ? Page : Fragment

  return (
    <Container morePadding>
      <h1>Lorem Ipsum</h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum purus a purus vulputate molestie in quis felis. Nam venenatis pretium orci nec placerat. Aliquam erat volutpat. Donec interdum fringilla dolor. Aenean tristique nunc nibh, luctus faucibus est tristique in. Vestibulum faucibus, tortor in aliquam hendrerit, magna lacus lacinia mauris, a tincidunt nunc arcu quis diam. Mauris sit amet faucibus sapien. Sed at congue ante. Vivamus et dapibus magna, et rutrum lorem. Nulla urna sapien, elementum et risus ac, porta condimentum velit. Maecenas gravida aliquam leo ut tristique. In est ante, mattis vitae nisi nec, hendrerit dictum justo. Quisque diam turpis, finibus sed tempor vitae, volutpat eu nulla. Phasellus vitae iaculis leo. Donec in felis condimentum arcu varius dictum vitae a libero. Duis tristique leo nec interdum sollicitudin.</p>

      <p>Ut at libero pretium, mattis enim sed, lobortis lorem. Sed vel fringilla justo. Donec blandit lectus at libero pretium, quis fermentum tortor dignissim. Integer in eros eros. Pellentesque accumsan accumsan odio, nec viverra diam aliquam vitae. In nec elit non dui porta luctus. Duis eget risus in velit interdum efficitur sed nec sapien. Fusce a nisi consequat, pharetra sapien eget, tempus tortor. Morbi viverra cursus odio, in viverra purus tincidunt eget. Aenean nunc sapien, hendrerit sit amet tempor non, lobortis ac elit. Praesent tristique leo molestie quam condimentum, sit amet vulputate est pharetra. Nullam quis ipsum mattis, sagittis eros a, cursus nulla. Morbi lacinia pretium elit, quis malesuada ex bibendum non. Fusce egestas massa mi, vitae imperdiet lorem ultricies sit amet.</p>

      <p>Phasellus ligula elit, aliquet vel fringilla ac, mollis sed orci. Suspendisse tempor dolor ligula, ut sagittis massa semper in. Sed elementum felis at mattis fermentum. Donec dignissim tellus tincidunt lacinia viverra. Donec vitae condimentum metus. Cras eu diam lacus. Quisque sed purus in tellus condimentum varius id in risus. Praesent at magna sit amet nunc imperdiet hendrerit a ut massa. In sit amet tortor ut mi semper accumsan.</p>
    </Container>
  )
}
