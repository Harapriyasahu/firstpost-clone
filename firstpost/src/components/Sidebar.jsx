import {useRef} from 'react';
import styles from './sidebar.module.css'
import { ChakraProvider, useDisclosure } from '@chakra-ui/react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

  export const SideBar=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
  
    return (
      <>
      <ChakraProvider>
        <Button ref={btnRef} colorScheme='black' onClick={onOpen}>
        <span style={{fontSize:"20px",marginTop:"7px"}}><i className="fas fa-align-justify"></i></span>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>
            <DrawerBody style={{padding:'0',marginTop:"5%"}}>
               <div className={styles.mainContainer}>
                <div className={styles.containerOne}>
                     <div>
                      <span><i class="fas fa-indent"></i></span>
                      <p>Sections</p>
                     </div>
                     <div>
                     <span><i class="far fa-copy"></i></span>
                      <p>More</p>
                     </div>
                     <div>
                     <span><i class="fas fa-tv"></i></span>
                      <p>Shows</p>
                     </div>
                     <div>
                     <span><i class="fab fa-cc-discover"></i></span>
                      <p>F.Brands</p>
                     </div>
                </div>
                <div className={styles.containerTwo}>
                  <div style={{fontWeight:"bold"}}><Link to="/">Home</Link></div>
                  <div style={{fontWeight:"bold"}}><Link to="/">Health</Link></div>
                  <div style={{fontWeight:"bold"}}><Link to="/">India</Link></div>
                  <div style={{fontWeight:"bold"}}><Link to="/">World</Link></div>
                  <div style={{fontWeight:"bold"}}><Link to="/">Politics</Link></div>
                  <div style={{fontWeight:"bold"}}><Link to="/">Arts & Culture</Link></div>
                  <div style={{fontWeight:"bold"}}><Link to="/">Auto</Link></div>
                  <div style={{fontWeight:"bold"}}><Link to="/">Opinion</Link></div>
                  <div style={{fontWeight:"bold"}}><Link to="/">Sports</Link></div>
                  <div style={{fontWeight:"bold"}}><Link to="/">Cricket</Link></div>
                  <div style={{fontWeight:"bold"}}><Link to="/">Entertainment</Link></div>
                  <div style={{fontWeight:"bold"}}><Link to="/">Tech</Link></div>
                  <div style={{fontWeight:"bold"}}><Link to="/">Photos</Link></div>
                  <div style={{fontWeight:"bold"}}><Link to="/">Videos</Link></div>
                  <div style={{fontWeight:"bold"}}><Link to="/">Buisness</Link></div>
                </div>
               </div>
               <div className={styles.ContainerThree}>
               <a href="https://www.facebook.com/firstpostin">
            <img
              style={{ marginTop: "13px", width: "25px", height: "25px" }}
              src="https://pnggrid.com/wp-content/uploads/2021/04/facebook-logo-1024x1024.png"
            />
          </a>

          <a href="https://twitter.com/firstpost">
            <img
              style={{ marginTop: "13px", width: "25px", height: "25px" }}
              src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"
            />
          </a>

          <a href="https://www.instagram.com/firstpost/">
            <img
              style={{ marginTop: "13px", width: "25px", height: "25px" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
            />
          </a>

          <a href="https://www.youtube.com/channel/UCz8QaiQxApLq8sLNcszYyJw/featured">
            <img
              style={{
                marginTop: "13px", width: "25px", height: "25px",
                borderRadius: "50px",
              }}
              src="https://www.dlf.pt/dfpng/middlepng/407-4075505_youtube-red-circle-youtube-icons-png-transparent-png.png"
            />
          </a>
               </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        </ChakraProvider>
      </>
    )
  }