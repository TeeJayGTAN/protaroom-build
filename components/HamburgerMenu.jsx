import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'


function HamburgerMenu({isMenuOpen}) {
             return(
          <div className={` hamburgerMenu mt-5 py-0.5`}>
              <div className={` ${ isMenuOpen ? 'rotateLeft' : 'makeStraight1'  } hamburgerMenu--line  rounded`}></div>
              <div className={` ${ isMenuOpen ? 'removeDash' : 'putDash'  } hamburgerMenu--line  rounded`}></div>
              <div className={` ${ isMenuOpen ? 'rotateRight' : 'makeStraight2'  }  hamburgerMenu--line rounded`}></div>
          </div>)
    // const hamburgerIcon = <AiOutlineMenu className='' size='32px' color= 'black'/>
    // const closeIcon = <AiOutlineClose className='' size='32px' color = 'black'/>
    // return(
    //   <div className="">
    //     {isMenuOpen ? closeIcon : hamburgerIcon}
    //     {/* {console.log(isMenuOpen)} */}
    //   </div>
    // )
}

export default HamburgerMenu