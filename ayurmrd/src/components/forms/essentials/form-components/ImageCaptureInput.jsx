import React,{useRef} from 'react'
import ICol from './ICol';
import IRow from './IRow';
import ImageFallback from '../../../../assets/ImageFallback.png'
import VideoFallback from '../../../../assets/VideoFallback.png'
export default function ImageCaptureInput(props) {
  const CameraPreviewReference = useRef(null);
  const tmagejsReference = useRef(null);;
  const imagurifdReference = useRef(null);

  let CameraPreview; 
  let tmagejs;
  let imagurifd;

  const openCamera = (e) => {
    CameraPreview = CameraPreviewReference.current;
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function (stream) {
        // Set the CameraPreview element's srcObject to the stream
        CameraPreview.srcObject = stream;
        CameraPreview.play();
      })
      .catch(function (error) {
        console.log(error);
      })
  };

  const captureImage = (e) => {
    tmagejs = tmagejsReference.current;

    imagurifd = imagurifdReference.current;

    var canvas = document.createElement('canvas');
    canvas.width = CameraPreview.videoWidth;
    canvas.height = CameraPreview.videoHeight;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(CameraPreview, 0, 0, canvas.width, canvas.height);

    var du = canvas.toDataURL('image/jpeg', 0.8);
    tmagejs.src = du;
    var b64du = du.replace(/^data:image\/?[A-z]*;base64,/, "");
    imagurifd.value = b64du;
  }

  return (
    <IRow title={props.title} gap='0.5rem'>
      <ICol down>
        <video ref={CameraPreviewReference} className='image-capture-input-video' poster={VideoFallback} width="300" height="300">
        </video>
        <button type="button" className="primary-btn" onClick={openCamera}>Open Camera</button>
      </ICol>
      <ICol down position='relative'>
        <input ref={imagurifdReference} name={props.name}  onInvalid={(e)=>{e.target.setCustomValidity('Please Capture an Image')}} style={{opacity:0,width:0,position:'absolute'}} required={props.required} type="text"/>
        <img ref={tmagejsReference} width="300" height="300" src={ImageFallback} alt='Preview' className='image-capture-preview-img' />
        <button type="button" className="primary-btn" onClick={captureImage}>Take Photo</button>
      </ICol>
    </IRow>
  )
}