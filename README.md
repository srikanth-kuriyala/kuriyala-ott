# Features covered
1. Display movielist which displays Movie title, short description and poster
2. Play movie/video by clicking play icon in the list
3. Close the video
4. Basic UI

# Installation
If you are using `npm` use:
```
npm install @srikanth.kuriyala/kuriyala-ott
```

If you are using `yarn` use:
```
yarn add @srikanth.kuriyala/kuriyala-ott
```

# Example
```
import { MoviesList } from '@srikanth.kuriyala/kuriyala-ott';

const movies = [
  {
    title: "Movie 1",
    url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    poster: "https://lh3.googleusercontent.com/j1SnAqNnzqGOC35MPWM5B2PYRY6Qom0-aKm5zsgsn4fQl4AqdbxQGq9XrPAe3i-dYUNwCrkwgltH3MSIA2-BuRsdxAPh4m77_P26ux8XVfn9kqVDt5Hlwpak9ZL12ZJuUQVjrsETbjzHwD89WZbaNk29mY1wIvK9sjAOgpJ8dXRwHQ_2fmlnE60AHJ1eTyDW5Q2flJOkHwV8_ZEgDJrAgANPT49lw0EHLvaYEndIykGsjtw2JpDd14a-rKek7YqWiPzfbPH1TmNnhQhFRIUSehVZdsf42Y97OQK2bHS9dwhDA-_ITf9jFpEDteFJspDeQqtdGSAAMB_xB-V0xcuTSvWC3ta7s1Wzkfz3c7P4cJti--ZenzfIriB3KI5S2PFCJ051KraNfgazX7k1MIOfU6pmqKpD7jKtc_4FycZwB5yis8yRBVXuU8AnCk9C3ojOYQWt02vxJGjsh5PCUI59M2rBwqTemQT30H4QNtQCMfNYgcY0PmHl1wJkJnHB5tPiISBbg3-i3Znj1hHB-8RhrMNX87R5xPW6odPc2uk5SsDtNJV4fezRNFVUhJfceLdCG5WE1O5iCvJYV2eMnCOeFG9erJE2rbu1SpO61uFa6XQskRJN0W3RC0TLDJdtNTj3lADWDf3Cg5HaDn1weLhGV_PKRLPoODtdy2BQL7Wft0RmA_C13pwlJwjT-83_dfArhVJXwcJV1Dncijt_AxOWKLc=w647-h949-no?authuser=0",
    shortDescription: "This is short description",
    description:"This is long description. Lorem ipsum may be used as a placeholder before final copy is available"
  },
  {
    title: "Movie 2",
    url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    poster: "https://lh3.googleusercontent.com/j1SnAqNnzqGOC35MPWM5B2PYRY6Qom0-aKm5zsgsn4fQl4AqdbxQGq9XrPAe3i-dYUNwCrkwgltH3MSIA2-BuRsdxAPh4m77_P26ux8XVfn9kqVDt5Hlwpak9ZL12ZJuUQVjrsETbjzHwD89WZbaNk29mY1wIvK9sjAOgpJ8dXRwHQ_2fmlnE60AHJ1eTyDW5Q2flJOkHwV8_ZEgDJrAgANPT49lw0EHLvaYEndIykGsjtw2JpDd14a-rKek7YqWiPzfbPH1TmNnhQhFRIUSehVZdsf42Y97OQK2bHS9dwhDA-_ITf9jFpEDteFJspDeQqtdGSAAMB_xB-V0xcuTSvWC3ta7s1Wzkfz3c7P4cJti--ZenzfIriB3KI5S2PFCJ051KraNfgazX7k1MIOfU6pmqKpD7jKtc_4FycZwB5yis8yRBVXuU8AnCk9C3ojOYQWt02vxJGjsh5PCUI59M2rBwqTemQT30H4QNtQCMfNYgcY0PmHl1wJkJnHB5tPiISBbg3-i3Znj1hHB-8RhrMNX87R5xPW6odPc2uk5SsDtNJV4fezRNFVUhJfceLdCG5WE1O5iCvJYV2eMnCOeFG9erJE2rbu1SpO61uFa6XQskRJN0W3RC0TLDJdtNTj3lADWDf3Cg5HaDn1weLhGV_PKRLPoODtdy2BQL7Wft0RmA_C13pwlJwjT-83_dfArhVJXwcJV1Dncijt_AxOWKLc=w647-h949-no?authuser=0",
    shortDescription: "This is short description",
    description:"This is long description. Lorem ipsum may be used as a placeholder before final copy is available"
  },
  {
    title: "Movie 3",
    url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    poster: "https://lh3.googleusercontent.com/j1SnAqNnzqGOC35MPWM5B2PYRY6Qom0-aKm5zsgsn4fQl4AqdbxQGq9XrPAe3i-dYUNwCrkwgltH3MSIA2-BuRsdxAPh4m77_P26ux8XVfn9kqVDt5Hlwpak9ZL12ZJuUQVjrsETbjzHwD89WZbaNk29mY1wIvK9sjAOgpJ8dXRwHQ_2fmlnE60AHJ1eTyDW5Q2flJOkHwV8_ZEgDJrAgANPT49lw0EHLvaYEndIykGsjtw2JpDd14a-rKek7YqWiPzfbPH1TmNnhQhFRIUSehVZdsf42Y97OQK2bHS9dwhDA-_ITf9jFpEDteFJspDeQqtdGSAAMB_xB-V0xcuTSvWC3ta7s1Wzkfz3c7P4cJti--ZenzfIriB3KI5S2PFCJ051KraNfgazX7k1MIOfU6pmqKpD7jKtc_4FycZwB5yis8yRBVXuU8AnCk9C3ojOYQWt02vxJGjsh5PCUI59M2rBwqTemQT30H4QNtQCMfNYgcY0PmHl1wJkJnHB5tPiISBbg3-i3Znj1hHB-8RhrMNX87R5xPW6odPc2uk5SsDtNJV4fezRNFVUhJfceLdCG5WE1O5iCvJYV2eMnCOeFG9erJE2rbu1SpO61uFa6XQskRJN0W3RC0TLDJdtNTj3lADWDf3Cg5HaDn1weLhGV_PKRLPoODtdy2BQL7Wft0RmA_C13pwlJwjT-83_dfArhVJXwcJV1Dncijt_AxOWKLc=w647-h949-no?authuser=0",
    shortDescription: "This is short description",
    description:"This is long description. Lorem ipsum may be used as a placeholder before final copy is available"
  },
  {
    title: "Movie 4",
    url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    poster: "https://lh3.googleusercontent.com/j1SnAqNnzqGOC35MPWM5B2PYRY6Qom0-aKm5zsgsn4fQl4AqdbxQGq9XrPAe3i-dYUNwCrkwgltH3MSIA2-BuRsdxAPh4m77_P26ux8XVfn9kqVDt5Hlwpak9ZL12ZJuUQVjrsETbjzHwD89WZbaNk29mY1wIvK9sjAOgpJ8dXRwHQ_2fmlnE60AHJ1eTyDW5Q2flJOkHwV8_ZEgDJrAgANPT49lw0EHLvaYEndIykGsjtw2JpDd14a-rKek7YqWiPzfbPH1TmNnhQhFRIUSehVZdsf42Y97OQK2bHS9dwhDA-_ITf9jFpEDteFJspDeQqtdGSAAMB_xB-V0xcuTSvWC3ta7s1Wzkfz3c7P4cJti--ZenzfIriB3KI5S2PFCJ051KraNfgazX7k1MIOfU6pmqKpD7jKtc_4FycZwB5yis8yRBVXuU8AnCk9C3ojOYQWt02vxJGjsh5PCUI59M2rBwqTemQT30H4QNtQCMfNYgcY0PmHl1wJkJnHB5tPiISBbg3-i3Znj1hHB-8RhrMNX87R5xPW6odPc2uk5SsDtNJV4fezRNFVUhJfceLdCG5WE1O5iCvJYV2eMnCOeFG9erJE2rbu1SpO61uFa6XQskRJN0W3RC0TLDJdtNTj3lADWDf3Cg5HaDn1weLhGV_PKRLPoODtdy2BQL7Wft0RmA_C13pwlJwjT-83_dfArhVJXwcJV1Dncijt_AxOWKLc=w647-h949-no?authuser=0",
    shortDescription: "This is short description",
    description:"This is long description. Lorem ipsum may be used as a placeholder before final copy is available"
  },
  {
    title: "Movie 5",
    url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    poster: "https://lh3.googleusercontent.com/j1SnAqNnzqGOC35MPWM5B2PYRY6Qom0-aKm5zsgsn4fQl4AqdbxQGq9XrPAe3i-dYUNwCrkwgltH3MSIA2-BuRsdxAPh4m77_P26ux8XVfn9kqVDt5Hlwpak9ZL12ZJuUQVjrsETbjzHwD89WZbaNk29mY1wIvK9sjAOgpJ8dXRwHQ_2fmlnE60AHJ1eTyDW5Q2flJOkHwV8_ZEgDJrAgANPT49lw0EHLvaYEndIykGsjtw2JpDd14a-rKek7YqWiPzfbPH1TmNnhQhFRIUSehVZdsf42Y97OQK2bHS9dwhDA-_ITf9jFpEDteFJspDeQqtdGSAAMB_xB-V0xcuTSvWC3ta7s1Wzkfz3c7P4cJti--ZenzfIriB3KI5S2PFCJ051KraNfgazX7k1MIOfU6pmqKpD7jKtc_4FycZwB5yis8yRBVXuU8AnCk9C3ojOYQWt02vxJGjsh5PCUI59M2rBwqTemQT30H4QNtQCMfNYgcY0PmHl1wJkJnHB5tPiISBbg3-i3Znj1hHB-8RhrMNX87R5xPW6odPc2uk5SsDtNJV4fezRNFVUhJfceLdCG5WE1O5iCvJYV2eMnCOeFG9erJE2rbu1SpO61uFa6XQskRJN0W3RC0TLDJdtNTj3lADWDf3Cg5HaDn1weLhGV_PKRLPoODtdy2BQL7Wft0RmA_C13pwlJwjT-83_dfArhVJXwcJV1Dncijt_AxOWKLc=w647-h949-no?authuser=0",
    shortDescription: "This is short description",
    description:"This is long description. Lorem ipsum may be used as a placeholder before final copy is available"
  },
  {
    title: "Movie 6",
    url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    poster: "https://lh3.googleusercontent.com/j1SnAqNnzqGOC35MPWM5B2PYRY6Qom0-aKm5zsgsn4fQl4AqdbxQGq9XrPAe3i-dYUNwCrkwgltH3MSIA2-BuRsdxAPh4m77_P26ux8XVfn9kqVDt5Hlwpak9ZL12ZJuUQVjrsETbjzHwD89WZbaNk29mY1wIvK9sjAOgpJ8dXRwHQ_2fmlnE60AHJ1eTyDW5Q2flJOkHwV8_ZEgDJrAgANPT49lw0EHLvaYEndIykGsjtw2JpDd14a-rKek7YqWiPzfbPH1TmNnhQhFRIUSehVZdsf42Y97OQK2bHS9dwhDA-_ITf9jFpEDteFJspDeQqtdGSAAMB_xB-V0xcuTSvWC3ta7s1Wzkfz3c7P4cJti--ZenzfIriB3KI5S2PFCJ051KraNfgazX7k1MIOfU6pmqKpD7jKtc_4FycZwB5yis8yRBVXuU8AnCk9C3ojOYQWt02vxJGjsh5PCUI59M2rBwqTemQT30H4QNtQCMfNYgcY0PmHl1wJkJnHB5tPiISBbg3-i3Znj1hHB-8RhrMNX87R5xPW6odPc2uk5SsDtNJV4fezRNFVUhJfceLdCG5WE1O5iCvJYV2eMnCOeFG9erJE2rbu1SpO61uFa6XQskRJN0W3RC0TLDJdtNTj3lADWDf3Cg5HaDn1weLhGV_PKRLPoODtdy2BQL7Wft0RmA_C13pwlJwjT-83_dfArhVJXwcJV1Dncijt_AxOWKLc=w647-h949-no?authuser=0",
    shortDescription: "This is short description",
    description:"This is long description. Lorem ipsum may be used as a placeholder before final copy is available"
  },
  {
    title: "Movie 7",
    url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    poster: "https://lh3.googleusercontent.com/j1SnAqNnzqGOC35MPWM5B2PYRY6Qom0-aKm5zsgsn4fQl4AqdbxQGq9XrPAe3i-dYUNwCrkwgltH3MSIA2-BuRsdxAPh4m77_P26ux8XVfn9kqVDt5Hlwpak9ZL12ZJuUQVjrsETbjzHwD89WZbaNk29mY1wIvK9sjAOgpJ8dXRwHQ_2fmlnE60AHJ1eTyDW5Q2flJOkHwV8_ZEgDJrAgANPT49lw0EHLvaYEndIykGsjtw2JpDd14a-rKek7YqWiPzfbPH1TmNnhQhFRIUSehVZdsf42Y97OQK2bHS9dwhDA-_ITf9jFpEDteFJspDeQqtdGSAAMB_xB-V0xcuTSvWC3ta7s1Wzkfz3c7P4cJti--ZenzfIriB3KI5S2PFCJ051KraNfgazX7k1MIOfU6pmqKpD7jKtc_4FycZwB5yis8yRBVXuU8AnCk9C3ojOYQWt02vxJGjsh5PCUI59M2rBwqTemQT30H4QNtQCMfNYgcY0PmHl1wJkJnHB5tPiISBbg3-i3Znj1hHB-8RhrMNX87R5xPW6odPc2uk5SsDtNJV4fezRNFVUhJfceLdCG5WE1O5iCvJYV2eMnCOeFG9erJE2rbu1SpO61uFa6XQskRJN0W3RC0TLDJdtNTj3lADWDf3Cg5HaDn1weLhGV_PKRLPoODtdy2BQL7Wft0RmA_C13pwlJwjT-83_dfArhVJXwcJV1Dncijt_AxOWKLc=w647-h949-no?authuser=0",
    shortDescription: "This is short description",
    description:"This is long description. Lorem ipsum may be used as a placeholder before final copy is available"
  },
  {
    title: "Movie 8",
    url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    poster: "https://lh3.googleusercontent.com/j1SnAqNnzqGOC35MPWM5B2PYRY6Qom0-aKm5zsgsn4fQl4AqdbxQGq9XrPAe3i-dYUNwCrkwgltH3MSIA2-BuRsdxAPh4m77_P26ux8XVfn9kqVDt5Hlwpak9ZL12ZJuUQVjrsETbjzHwD89WZbaNk29mY1wIvK9sjAOgpJ8dXRwHQ_2fmlnE60AHJ1eTyDW5Q2flJOkHwV8_ZEgDJrAgANPT49lw0EHLvaYEndIykGsjtw2JpDd14a-rKek7YqWiPzfbPH1TmNnhQhFRIUSehVZdsf42Y97OQK2bHS9dwhDA-_ITf9jFpEDteFJspDeQqtdGSAAMB_xB-V0xcuTSvWC3ta7s1Wzkfz3c7P4cJti--ZenzfIriB3KI5S2PFCJ051KraNfgazX7k1MIOfU6pmqKpD7jKtc_4FycZwB5yis8yRBVXuU8AnCk9C3ojOYQWt02vxJGjsh5PCUI59M2rBwqTemQT30H4QNtQCMfNYgcY0PmHl1wJkJnHB5tPiISBbg3-i3Znj1hHB-8RhrMNX87R5xPW6odPc2uk5SsDtNJV4fezRNFVUhJfceLdCG5WE1O5iCvJYV2eMnCOeFG9erJE2rbu1SpO61uFa6XQskRJN0W3RC0TLDJdtNTj3lADWDf3Cg5HaDn1weLhGV_PKRLPoODtdy2BQL7Wft0RmA_C13pwlJwjT-83_dfArhVJXwcJV1Dncijt_AxOWKLc=w647-h949-no?authuser=0",
    shortDescription: "This is short description",
    description:"This is long description. Lorem ipsum may be used as a placeholder before final copy is available"
  },
  {
    title: "Movie 9",
    url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    poster: "https://lh3.googleusercontent.com/j1SnAqNnzqGOC35MPWM5B2PYRY6Qom0-aKm5zsgsn4fQl4AqdbxQGq9XrPAe3i-dYUNwCrkwgltH3MSIA2-BuRsdxAPh4m77_P26ux8XVfn9kqVDt5Hlwpak9ZL12ZJuUQVjrsETbjzHwD89WZbaNk29mY1wIvK9sjAOgpJ8dXRwHQ_2fmlnE60AHJ1eTyDW5Q2flJOkHwV8_ZEgDJrAgANPT49lw0EHLvaYEndIykGsjtw2JpDd14a-rKek7YqWiPzfbPH1TmNnhQhFRIUSehVZdsf42Y97OQK2bHS9dwhDA-_ITf9jFpEDteFJspDeQqtdGSAAMB_xB-V0xcuTSvWC3ta7s1Wzkfz3c7P4cJti--ZenzfIriB3KI5S2PFCJ051KraNfgazX7k1MIOfU6pmqKpD7jKtc_4FycZwB5yis8yRBVXuU8AnCk9C3ojOYQWt02vxJGjsh5PCUI59M2rBwqTemQT30H4QNtQCMfNYgcY0PmHl1wJkJnHB5tPiISBbg3-i3Znj1hHB-8RhrMNX87R5xPW6odPc2uk5SsDtNJV4fezRNFVUhJfceLdCG5WE1O5iCvJYV2eMnCOeFG9erJE2rbu1SpO61uFa6XQskRJN0W3RC0TLDJdtNTj3lADWDf3Cg5HaDn1weLhGV_PKRLPoODtdy2BQL7Wft0RmA_C13pwlJwjT-83_dfArhVJXwcJV1Dncijt_AxOWKLc=w647-h949-no?authuser=0",
    shortDescription: "This is short description",
    description:"This is long description. Lorem ipsum may be used as a placeholder before final copy is available"
  },
  {
    title: "Movie 10",
    url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    poster: "https://lh3.googleusercontent.com/j1SnAqNnzqGOC35MPWM5B2PYRY6Qom0-aKm5zsgsn4fQl4AqdbxQGq9XrPAe3i-dYUNwCrkwgltH3MSIA2-BuRsdxAPh4m77_P26ux8XVfn9kqVDt5Hlwpak9ZL12ZJuUQVjrsETbjzHwD89WZbaNk29mY1wIvK9sjAOgpJ8dXRwHQ_2fmlnE60AHJ1eTyDW5Q2flJOkHwV8_ZEgDJrAgANPT49lw0EHLvaYEndIykGsjtw2JpDd14a-rKek7YqWiPzfbPH1TmNnhQhFRIUSehVZdsf42Y97OQK2bHS9dwhDA-_ITf9jFpEDteFJspDeQqtdGSAAMB_xB-V0xcuTSvWC3ta7s1Wzkfz3c7P4cJti--ZenzfIriB3KI5S2PFCJ051KraNfgazX7k1MIOfU6pmqKpD7jKtc_4FycZwB5yis8yRBVXuU8AnCk9C3ojOYQWt02vxJGjsh5PCUI59M2rBwqTemQT30H4QNtQCMfNYgcY0PmHl1wJkJnHB5tPiISBbg3-i3Znj1hHB-8RhrMNX87R5xPW6odPc2uk5SsDtNJV4fezRNFVUhJfceLdCG5WE1O5iCvJYV2eMnCOeFG9erJE2rbu1SpO61uFa6XQskRJN0W3RC0TLDJdtNTj3lADWDf3Cg5HaDn1weLhGV_PKRLPoODtdy2BQL7Wft0RmA_C13pwlJwjT-83_dfArhVJXwcJV1Dncijt_AxOWKLc=w647-h949-no?authuser=0",
    shortDescription: "This is short description",
    description:"This is long description. Lorem ipsum may be used as a placeholder before final copy is available"
  },
  {
    title: "Movie 11",
    url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    poster: "https://lh3.googleusercontent.com/j1SnAqNnzqGOC35MPWM5B2PYRY6Qom0-aKm5zsgsn4fQl4AqdbxQGq9XrPAe3i-dYUNwCrkwgltH3MSIA2-BuRsdxAPh4m77_P26ux8XVfn9kqVDt5Hlwpak9ZL12ZJuUQVjrsETbjzHwD89WZbaNk29mY1wIvK9sjAOgpJ8dXRwHQ_2fmlnE60AHJ1eTyDW5Q2flJOkHwV8_ZEgDJrAgANPT49lw0EHLvaYEndIykGsjtw2JpDd14a-rKek7YqWiPzfbPH1TmNnhQhFRIUSehVZdsf42Y97OQK2bHS9dwhDA-_ITf9jFpEDteFJspDeQqtdGSAAMB_xB-V0xcuTSvWC3ta7s1Wzkfz3c7P4cJti--ZenzfIriB3KI5S2PFCJ051KraNfgazX7k1MIOfU6pmqKpD7jKtc_4FycZwB5yis8yRBVXuU8AnCk9C3ojOYQWt02vxJGjsh5PCUI59M2rBwqTemQT30H4QNtQCMfNYgcY0PmHl1wJkJnHB5tPiISBbg3-i3Znj1hHB-8RhrMNX87R5xPW6odPc2uk5SsDtNJV4fezRNFVUhJfceLdCG5WE1O5iCvJYV2eMnCOeFG9erJE2rbu1SpO61uFa6XQskRJN0W3RC0TLDJdtNTj3lADWDf3Cg5HaDn1weLhGV_PKRLPoODtdy2BQL7Wft0RmA_C13pwlJwjT-83_dfArhVJXwcJV1Dncijt_AxOWKLc=w647-h949-no?authuser=0",
    shortDescription: "This is short description",
    description:"This is long description. Lorem ipsum may be used as a placeholder before final copy is available"
  },
  {
    title: "Movie 12",
    url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    poster: "https://lh3.googleusercontent.com/j1SnAqNnzqGOC35MPWM5B2PYRY6Qom0-aKm5zsgsn4fQl4AqdbxQGq9XrPAe3i-dYUNwCrkwgltH3MSIA2-BuRsdxAPh4m77_P26ux8XVfn9kqVDt5Hlwpak9ZL12ZJuUQVjrsETbjzHwD89WZbaNk29mY1wIvK9sjAOgpJ8dXRwHQ_2fmlnE60AHJ1eTyDW5Q2flJOkHwV8_ZEgDJrAgANPT49lw0EHLvaYEndIykGsjtw2JpDd14a-rKek7YqWiPzfbPH1TmNnhQhFRIUSehVZdsf42Y97OQK2bHS9dwhDA-_ITf9jFpEDteFJspDeQqtdGSAAMB_xB-V0xcuTSvWC3ta7s1Wzkfz3c7P4cJti--ZenzfIriB3KI5S2PFCJ051KraNfgazX7k1MIOfU6pmqKpD7jKtc_4FycZwB5yis8yRBVXuU8AnCk9C3ojOYQWt02vxJGjsh5PCUI59M2rBwqTemQT30H4QNtQCMfNYgcY0PmHl1wJkJnHB5tPiISBbg3-i3Znj1hHB-8RhrMNX87R5xPW6odPc2uk5SsDtNJV4fezRNFVUhJfceLdCG5WE1O5iCvJYV2eMnCOeFG9erJE2rbu1SpO61uFa6XQskRJN0W3RC0TLDJdtNTj3lADWDf3Cg5HaDn1weLhGV_PKRLPoODtdy2BQL7Wft0RmA_C13pwlJwjT-83_dfArhVJXwcJV1Dncijt_AxOWKLc=w647-h949-no?authuser=0",
    shortDescription: "This is short description",
    description:"This is long description. Lorem ipsum may be used as a placeholder before final copy is available"
  },
  {
    title: "Movie 13",
    url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    poster: "https://lh3.googleusercontent.com/j1SnAqNnzqGOC35MPWM5B2PYRY6Qom0-aKm5zsgsn4fQl4AqdbxQGq9XrPAe3i-dYUNwCrkwgltH3MSIA2-BuRsdxAPh4m77_P26ux8XVfn9kqVDt5Hlwpak9ZL12ZJuUQVjrsETbjzHwD89WZbaNk29mY1wIvK9sjAOgpJ8dXRwHQ_2fmlnE60AHJ1eTyDW5Q2flJOkHwV8_ZEgDJrAgANPT49lw0EHLvaYEndIykGsjtw2JpDd14a-rKek7YqWiPzfbPH1TmNnhQhFRIUSehVZdsf42Y97OQK2bHS9dwhDA-_ITf9jFpEDteFJspDeQqtdGSAAMB_xB-V0xcuTSvWC3ta7s1Wzkfz3c7P4cJti--ZenzfIriB3KI5S2PFCJ051KraNfgazX7k1MIOfU6pmqKpD7jKtc_4FycZwB5yis8yRBVXuU8AnCk9C3ojOYQWt02vxJGjsh5PCUI59M2rBwqTemQT30H4QNtQCMfNYgcY0PmHl1wJkJnHB5tPiISBbg3-i3Znj1hHB-8RhrMNX87R5xPW6odPc2uk5SsDtNJV4fezRNFVUhJfceLdCG5WE1O5iCvJYV2eMnCOeFG9erJE2rbu1SpO61uFa6XQskRJN0W3RC0TLDJdtNTj3lADWDf3Cg5HaDn1weLhGV_PKRLPoODtdy2BQL7Wft0RmA_C13pwlJwjT-83_dfArhVJXwcJV1Dncijt_AxOWKLc=w647-h949-no?authuser=0",
    shortDescription: "This is short description",
    description:"This is long description. Lorem ipsum may be used as a placeholder before final copy is available"
  },
  {
    title: "Movie 14",
    url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    poster: "https://lh3.googleusercontent.com/j1SnAqNnzqGOC35MPWM5B2PYRY6Qom0-aKm5zsgsn4fQl4AqdbxQGq9XrPAe3i-dYUNwCrkwgltH3MSIA2-BuRsdxAPh4m77_P26ux8XVfn9kqVDt5Hlwpak9ZL12ZJuUQVjrsETbjzHwD89WZbaNk29mY1wIvK9sjAOgpJ8dXRwHQ_2fmlnE60AHJ1eTyDW5Q2flJOkHwV8_ZEgDJrAgANPT49lw0EHLvaYEndIykGsjtw2JpDd14a-rKek7YqWiPzfbPH1TmNnhQhFRIUSehVZdsf42Y97OQK2bHS9dwhDA-_ITf9jFpEDteFJspDeQqtdGSAAMB_xB-V0xcuTSvWC3ta7s1Wzkfz3c7P4cJti--ZenzfIriB3KI5S2PFCJ051KraNfgazX7k1MIOfU6pmqKpD7jKtc_4FycZwB5yis8yRBVXuU8AnCk9C3ojOYQWt02vxJGjsh5PCUI59M2rBwqTemQT30H4QNtQCMfNYgcY0PmHl1wJkJnHB5tPiISBbg3-i3Znj1hHB-8RhrMNX87R5xPW6odPc2uk5SsDtNJV4fezRNFVUhJfceLdCG5WE1O5iCvJYV2eMnCOeFG9erJE2rbu1SpO61uFa6XQskRJN0W3RC0TLDJdtNTj3lADWDf3Cg5HaDn1weLhGV_PKRLPoODtdy2BQL7Wft0RmA_C13pwlJwjT-83_dfArhVJXwcJV1Dncijt_AxOWKLc=w647-h949-no?authuser=0",
    shortDescription: "This is short description",
    description:"This is long description. Lorem ipsum may be used as a placeholder before final copy is available"
  }
]

<MoviesList movies={movies}/>
```