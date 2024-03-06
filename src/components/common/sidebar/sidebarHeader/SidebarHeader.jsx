import Logo from '../../../../assets/imgs/logo.png'
import './SidebarHeader.scss'

function SidebarHeader() {
  return (
    <div className='sidebar-header'>
      <img src={Logo} width={60} />
    </div>
  )
}

export default SidebarHeader
