import style from '../Slider/Index.module.css'

interface Props {} 

export const Slider: React.FC<Props> = () => {
  return (
    <div className={style.container}>
      <div className={style.slider}>

      </div>
      <div className={style.sliderCenter}>
        <h1 className={style.title}>
          The Tech Blog
        </h1>
        <p className={style.description}>Spreading joy for the glory of God</p>
      </div>
    </div>
  )
}

