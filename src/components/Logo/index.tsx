import LogoImage from './Logo.png'

export default function Logo(props: React.HTMLProps<HTMLImageElement>) {
  return <img src={LogoImage} width={108} height={28} {...props} />
}
