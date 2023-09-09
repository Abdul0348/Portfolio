import React from 'react';
import {BiSolidExtension, BiLogoReact, BiLogoNodejs, BiLogoMongodb} from 'react-icons/bi' 
import {LiaSalesforce} from 'react-icons/lia'
import {HiTemplate} from 'react-icons/hi'
import {DiJavascript} from 'react-icons/di'
import {AiOutlineDeploymentUnit} from 'react-icons/ai' 
import {FaLaptopCode} from 'react-icons/fa'
import {FcLineChart} from 'react-icons/fc'

const Shapes = () => {
  return (
    <div className='shapes'>
    <FaLaptopCode className="shape s1" fill="#da9516" fill-rule="evenodd" />
    <BiLogoNodejs className="shape s2" fill="#FF4C60" fill-rule="evenodd"/>
    <LiaSalesforce className="shape s3" fill="#435334" fill-rule="evenodd" />
    <HiTemplate className="shape s4" fill="#da9516" fill-rule="evenodd" />
    <AiOutlineDeploymentUnit className="shape s6" fill="#FF4C60" fill-rule="evenodd" />
    <FcLineChart className="shape s7" fill="#6C6CE5" fill-rule="evenodd" />
    <BiLogoMongodb className="shape s8" fill="#6C6CE5" fill-rule="evenodd" />
    <BiLogoReact className="shape s9" fill="#6C6CE5" fill-rule="evenodd" />
    <BiSolidExtension className="shape s10" fill="#FF4C60" fill-rule="evenodd" />
    <DiJavascript className="shape s11" fill="#da9516" fill-rule="evenodd" />
    </div>
  )
}

export default Shapes