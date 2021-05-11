Under construction <<<<<<<<<<<< OTT platform

# Example
import { MoviesList } from '@srikanth.kuriyala/kuriyala-ott';

const movies = [
  { title: "Singam", url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", poster: "https://www.filmibeat.com/ph-big/2011/11/1322479165637218.jpg", description:"Singam First part"},
  { title: "Singam 2", url: "https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4", poster: "https://flxt.tmsimg.com/assets/p10994450_p_v10_ac.jpg", description:"Singam Second part"},
  { title: "Singam 3", url: "https://cdn.videvo.net/videvo_files/video/free/2014-02/small_watermarked/Microscope_5__Scientist__Videvo_preview.webm", poster: "https://lh3.googleusercontent.com/proxy/lud_3vmHY8Avs3ehtz9o1zsuQ3s0_PccTiP0VMXkkuLKS7awGrJ_vgGSmQtxkwO0Pvtd-4xX3bPICSi3J1EgetUHchF_kleQYZvwb15rmBmDqFUwbotIX7Hdk7wruzVx5d5cpQukNBzewnapI9SAR4SRt4AFi1Gs87f7cywISzjj2pNX", description:"Singam Third part"},
  { title: "Singam", url: "https://cdn.videvo.net/videvo_files/video/free/2020-04/small_watermarked/200401_Medical%206_01_preview.webm", poster: "https://www.filmibeat.com/ph-big/2011/11/1322479165637218.jpg", description:"Singam First part"},
  { title: "Singam 2", url: "", poster: "https://flxt.tmsimg.com/assets/p10994450_p_v10_ac.jpg", description:"Singam Second part"},
  { title: "Singam 3", url: "", poster: "https://lh3.googleusercontent.com/proxy/lud_3vmHY8Avs3ehtz9o1zsuQ3s0_PccTiP0VMXkkuLKS7awGrJ_vgGSmQtxkwO0Pvtd-4xX3bPICSi3J1EgetUHchF_kleQYZvwb15rmBmDqFUwbotIX7Hdk7wruzVx5d5cpQukNBzewnapI9SAR4SRt4AFi1Gs87f7cywISzjj2pNX", description:"Singam Third part"},
  { title: "Singam", url: "", poster: "https://www.filmibeat.com/ph-big/2011/11/1322479165637218.jpg", description:"Singam First part"},
  { title: "Singam 2", url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", poster: "https://flxt.tmsimg.com/assets/p10994450_p_v10_ac.jpg", description:"Singam Second part"},
  { title: "Singam 3", url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", poster: "https://lh3.googleusercontent.com/proxy/lud_3vmHY8Avs3ehtz9o1zsuQ3s0_PccTiP0VMXkkuLKS7awGrJ_vgGSmQtxkwO0Pvtd-4xX3bPICSi3J1EgetUHchF_kleQYZvwb15rmBmDqFUwbotIX7Hdk7wruzVx5d5cpQukNBzewnapI9SAR4SRt4AFi1Gs87f7cywISzjj2pNX", description:"Singam Third part"}
]

<MoviesList movies={movies}/>