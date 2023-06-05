import { ReactElement } from 'react'
import influencive from '../../assets/projects/Influencive.png'

const ProjectItem = (): ReactElement => {
  return (
    <div className='lg:w-1/2 md:px-5 py-5'>
      <div className='flex flex-col items-center gap-6 shadow-lg'>
        <img src={influencive} alt='Influencive' className='' />

        <div className='px-5 pb-5'>
          <h2 className={`font-semibold text-2xl`}>Promoty</h2>
          <p className={`text-orange-500 font-medium`}>Influencer Management Platform</p>
          <p className='my-5'>
            asdf asdfasd fas dfasf asdf asd fas dfasd fas asdf asfd asf asf asdf as dfas fas dfasdf
            asd fa sfasdf asfasdf fgasgas asdfasdf as fd asdf asdfasd fas dfasf asdf asd fas dfasd
            fas asdf asfd asf asf asdf as dfas fas dfasdf asd fa sfasdf asfasdf fgasgas asdfasdf as
            fd asdf asdfasd fas dfasf asdf asd fas dfasd fas asdf asfd asf asf asdf as dfas fas
            dfasdf asd fa sfasdf asfasdf fgasgas asdfasdf as fdasdf asdfasd fas dfasf asdf asd fas
            dfasd fas
          </p>

          <p className='font-semibold'>
            Staff tools for campaign management, User tools in CRM, payment detection and linking
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
