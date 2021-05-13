# Features covered
1. Movielist: Poster, Title, Short description, Year, Play, Progress bar
2. Progress bar: Indicates the video watch percentage
3. Resume video: From where stopped or closed the video
4. Detail page: Click on poster from list to see video deatils
5. Play video: Click play icon in listing page or  video detail page
6. Watched: Label will display for the videos which is watched morethan 95% of the video

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
    id: 1,
    title: "Movie 1",
    url: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
    banner: "https://lh3.googleusercontent.com/axi8VMGzIXsnandBtXY5Q9nDG57J8tgreCnZ_QLWmlBxvYa8dw8-dYXYOwLXQGmuOzts74g9HriwvoFRnK27eW2crqVFTvbZpw84W4QT3PK6-VHW5nIXVnaLY4hUE0HJbvLN4nH_HNM602AR0oJMGA1cObQA827xcis5XNqGzgXSd4rGOwAS8cZldRAk7SoRJ_kYC6DRyIk9vq3Hp1X1lrqDffPJEP6t4q4m8aKPkNuqZoD2HdPhs99ctweSvLJoF_nJzEjNB0DU7IN72dnd7QYcGrkF5MccslpxUz8fFy2E_tZG6DL2A26eOEk4pWRB3CtB4f30Hepb3pMsc3mq5PJTbtyH4wkGE-khZkBICI7Z8wUCyBgbAle42yowo-CpQM0gqqmZtsBepwBhBOpLlmXN1wISct5jDUPYgvL13vyaGrw7RsAjvSC10ebiWIQg92El5vtWnGobIcLzqdl-blmNTerOfmu32ebqYEgqGdXVbFAy1Yksc4tRScmSl_kezu01BIBJz57hEpDZklPDeCCZYH2zih4ZcQC5u2-62z-oEcUSApdzP87ElLRUm0wVtDQOLydihcnRtcjUZ4c0SCNatvRY8zmijI5c_faW6GXgZHyVQDn5QLfCvZ96JeB16FdUDwBh7kFQGEELRP4_BkFmDp5l1hUWNSHLNVQqVTF53KQPbjYiE2DjbQnRMxxIPRuFCjdB1D9JswM1HX3Mdxc=w1280-h720-no?authuser=0",
    poster: "https://lh3.googleusercontent.com/j1SnAqNnzqGOC35MPWM5B2PYRY6Qom0-aKm5zsgsn4fQl4AqdbxQGq9XrPAe3i-dYUNwCrkwgltH3MSIA2-BuRsdxAPh4m77_P26ux8XVfn9kqVDt5Hlwpak9ZL12ZJuUQVjrsETbjzHwD89WZbaNk29mY1wIvK9sjAOgpJ8dXRwHQ_2fmlnE60AHJ1eTyDW5Q2flJOkHwV8_ZEgDJrAgANPT49lw0EHLvaYEndIykGsjtw2JpDd14a-rKek7YqWiPzfbPH1TmNnhQhFRIUSehVZdsf42Y97OQK2bHS9dwhDA-_ITf9jFpEDteFJspDeQqtdGSAAMB_xB-V0xcuTSvWC3ta7s1Wzkfz3c7P4cJti--ZenzfIriB3KI5S2PFCJ051KraNfgazX7k1MIOfU6pmqKpD7jKtc_4FycZwB5yis8yRBVXuU8AnCk9C3ojOYQWt02vxJGjsh5PCUI59M2rBwqTemQT30H4QNtQCMfNYgcY0PmHl1wJkJnHB5tPiISBbg3-i3Znj1hHB-8RhrMNX87R5xPW6odPc2uk5SsDtNJV4fezRNFVUhJfceLdCG5WE1O5iCvJYV2eMnCOeFG9erJE2rbu1SpO61uFa6XQskRJN0W3RC0TLDJdtNTj3lADWDf3Cg5HaDn1weLhGV_PKRLPoODtdy2BQL7Wft0RmA_C13pwlJwjT-83_dfArhVJXwcJV1Dncijt_AxOWKLc=w647-h949-no?authuser=0",
    shortDescription: "This is short description",
    year: 2009,
    description:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    progressBarPercent: 96,
    duration: 125.952,
    timePlayed: 100,
    timeStarted: -1,
    starring: "Srikanth, Srikanth Kuriyala, SRKanth",
    director: "SRKanth",
    category: "Action",
    language: "Telugu"
  },
  {
    id: 2,
    title: "Movie 2",
    url: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
    banner: "https://lh3.googleusercontent.com/axi8VMGzIXsnandBtXY5Q9nDG57J8tgreCnZ_QLWmlBxvYa8dw8-dYXYOwLXQGmuOzts74g9HriwvoFRnK27eW2crqVFTvbZpw84W4QT3PK6-VHW5nIXVnaLY4hUE0HJbvLN4nH_HNM602AR0oJMGA1cObQA827xcis5XNqGzgXSd4rGOwAS8cZldRAk7SoRJ_kYC6DRyIk9vq3Hp1X1lrqDffPJEP6t4q4m8aKPkNuqZoD2HdPhs99ctweSvLJoF_nJzEjNB0DU7IN72dnd7QYcGrkF5MccslpxUz8fFy2E_tZG6DL2A26eOEk4pWRB3CtB4f30Hepb3pMsc3mq5PJTbtyH4wkGE-khZkBICI7Z8wUCyBgbAle42yowo-CpQM0gqqmZtsBepwBhBOpLlmXN1wISct5jDUPYgvL13vyaGrw7RsAjvSC10ebiWIQg92El5vtWnGobIcLzqdl-blmNTerOfmu32ebqYEgqGdXVbFAy1Yksc4tRScmSl_kezu01BIBJz57hEpDZklPDeCCZYH2zih4ZcQC5u2-62z-oEcUSApdzP87ElLRUm0wVtDQOLydihcnRtcjUZ4c0SCNatvRY8zmijI5c_faW6GXgZHyVQDn5QLfCvZ96JeB16FdUDwBh7kFQGEELRP4_BkFmDp5l1hUWNSHLNVQqVTF53KQPbjYiE2DjbQnRMxxIPRuFCjdB1D9JswM1HX3Mdxc=w1280-h720-no?authuser=0",
    poster: "https://lh3.googleusercontent.com/j1SnAqNnzqGOC35MPWM5B2PYRY6Qom0-aKm5zsgsn4fQl4AqdbxQGq9XrPAe3i-dYUNwCrkwgltH3MSIA2-BuRsdxAPh4m77_P26ux8XVfn9kqVDt5Hlwpak9ZL12ZJuUQVjrsETbjzHwD89WZbaNk29mY1wIvK9sjAOgpJ8dXRwHQ_2fmlnE60AHJ1eTyDW5Q2flJOkHwV8_ZEgDJrAgANPT49lw0EHLvaYEndIykGsjtw2JpDd14a-rKek7YqWiPzfbPH1TmNnhQhFRIUSehVZdsf42Y97OQK2bHS9dwhDA-_ITf9jFpEDteFJspDeQqtdGSAAMB_xB-V0xcuTSvWC3ta7s1Wzkfz3c7P4cJti--ZenzfIriB3KI5S2PFCJ051KraNfgazX7k1MIOfU6pmqKpD7jKtc_4FycZwB5yis8yRBVXuU8AnCk9C3ojOYQWt02vxJGjsh5PCUI59M2rBwqTemQT30H4QNtQCMfNYgcY0PmHl1wJkJnHB5tPiISBbg3-i3Znj1hHB-8RhrMNX87R5xPW6odPc2uk5SsDtNJV4fezRNFVUhJfceLdCG5WE1O5iCvJYV2eMnCOeFG9erJE2rbu1SpO61uFa6XQskRJN0W3RC0TLDJdtNTj3lADWDf3Cg5HaDn1weLhGV_PKRLPoODtdy2BQL7Wft0RmA_C13pwlJwjT-83_dfArhVJXwcJV1Dncijt_AxOWKLc=w647-h949-no?authuser=0",
    shortDescription: "This is short description",
    year: 2008,
    description:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    progressBarPercent: 0,
    duration: 125.952,
    timePlayed: 0,
    timeStarted: -1,
    starring: "Srikanth, Srikanth Kuriyala, SRKanth",
    director: "SRKanth",
    category: "Action",
    language: "Telugu"
  },
  {
    id: 3,
    title: "Movie 3",
    url: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
    banner: "https://lh3.googleusercontent.com/axi8VMGzIXsnandBtXY5Q9nDG57J8tgreCnZ_QLWmlBxvYa8dw8-dYXYOwLXQGmuOzts74g9HriwvoFRnK27eW2crqVFTvbZpw84W4QT3PK6-VHW5nIXVnaLY4hUE0HJbvLN4nH_HNM602AR0oJMGA1cObQA827xcis5XNqGzgXSd4rGOwAS8cZldRAk7SoRJ_kYC6DRyIk9vq3Hp1X1lrqDffPJEP6t4q4m8aKPkNuqZoD2HdPhs99ctweSvLJoF_nJzEjNB0DU7IN72dnd7QYcGrkF5MccslpxUz8fFy2E_tZG6DL2A26eOEk4pWRB3CtB4f30Hepb3pMsc3mq5PJTbtyH4wkGE-khZkBICI7Z8wUCyBgbAle42yowo-CpQM0gqqmZtsBepwBhBOpLlmXN1wISct5jDUPYgvL13vyaGrw7RsAjvSC10ebiWIQg92El5vtWnGobIcLzqdl-blmNTerOfmu32ebqYEgqGdXVbFAy1Yksc4tRScmSl_kezu01BIBJz57hEpDZklPDeCCZYH2zih4ZcQC5u2-62z-oEcUSApdzP87ElLRUm0wVtDQOLydihcnRtcjUZ4c0SCNatvRY8zmijI5c_faW6GXgZHyVQDn5QLfCvZ96JeB16FdUDwBh7kFQGEELRP4_BkFmDp5l1hUWNSHLNVQqVTF53KQPbjYiE2DjbQnRMxxIPRuFCjdB1D9JswM1HX3Mdxc=w1280-h720-no?authuser=0",
    poster: "https://lh3.googleusercontent.com/j1SnAqNnzqGOC35MPWM5B2PYRY6Qom0-aKm5zsgsn4fQl4AqdbxQGq9XrPAe3i-dYUNwCrkwgltH3MSIA2-BuRsdxAPh4m77_P26ux8XVfn9kqVDt5Hlwpak9ZL12ZJuUQVjrsETbjzHwD89WZbaNk29mY1wIvK9sjAOgpJ8dXRwHQ_2fmlnE60AHJ1eTyDW5Q2flJOkHwV8_ZEgDJrAgANPT49lw0EHLvaYEndIykGsjtw2JpDd14a-rKek7YqWiPzfbPH1TmNnhQhFRIUSehVZdsf42Y97OQK2bHS9dwhDA-_ITf9jFpEDteFJspDeQqtdGSAAMB_xB-V0xcuTSvWC3ta7s1Wzkfz3c7P4cJti--ZenzfIriB3KI5S2PFCJ051KraNfgazX7k1MIOfU6pmqKpD7jKtc_4FycZwB5yis8yRBVXuU8AnCk9C3ojOYQWt02vxJGjsh5PCUI59M2rBwqTemQT30H4QNtQCMfNYgcY0PmHl1wJkJnHB5tPiISBbg3-i3Znj1hHB-8RhrMNX87R5xPW6odPc2uk5SsDtNJV4fezRNFVUhJfceLdCG5WE1O5iCvJYV2eMnCOeFG9erJE2rbu1SpO61uFa6XQskRJN0W3RC0TLDJdtNTj3lADWDf3Cg5HaDn1weLhGV_PKRLPoODtdy2BQL7Wft0RmA_C13pwlJwjT-83_dfArhVJXwcJV1Dncijt_AxOWKLc=w647-h949-no?authuser=0",
    shortDescription: "This is short description",
    year: 2007,
    description:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    progressBarPercent: 0,
    duration: 125.952,
    timePlayed: 0,
    timeStarted: -1,
    starring: "Srikanth, Srikanth Kuriyala, SRKanth",
    director: "SRKanth",
    category: "Action",
    language: "Telugu"
  },
  {
    id: 4,
    title: "Movie 4",
    url: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
    banner: "https://lh3.googleusercontent.com/axi8VMGzIXsnandBtXY5Q9nDG57J8tgreCnZ_QLWmlBxvYa8dw8-dYXYOwLXQGmuOzts74g9HriwvoFRnK27eW2crqVFTvbZpw84W4QT3PK6-VHW5nIXVnaLY4hUE0HJbvLN4nH_HNM602AR0oJMGA1cObQA827xcis5XNqGzgXSd4rGOwAS8cZldRAk7SoRJ_kYC6DRyIk9vq3Hp1X1lrqDffPJEP6t4q4m8aKPkNuqZoD2HdPhs99ctweSvLJoF_nJzEjNB0DU7IN72dnd7QYcGrkF5MccslpxUz8fFy2E_tZG6DL2A26eOEk4pWRB3CtB4f30Hepb3pMsc3mq5PJTbtyH4wkGE-khZkBICI7Z8wUCyBgbAle42yowo-CpQM0gqqmZtsBepwBhBOpLlmXN1wISct5jDUPYgvL13vyaGrw7RsAjvSC10ebiWIQg92El5vtWnGobIcLzqdl-blmNTerOfmu32ebqYEgqGdXVbFAy1Yksc4tRScmSl_kezu01BIBJz57hEpDZklPDeCCZYH2zih4ZcQC5u2-62z-oEcUSApdzP87ElLRUm0wVtDQOLydihcnRtcjUZ4c0SCNatvRY8zmijI5c_faW6GXgZHyVQDn5QLfCvZ96JeB16FdUDwBh7kFQGEELRP4_BkFmDp5l1hUWNSHLNVQqVTF53KQPbjYiE2DjbQnRMxxIPRuFCjdB1D9JswM1HX3Mdxc=w1280-h720-no?authuser=0",
    poster: "https://lh3.googleusercontent.com/j1SnAqNnzqGOC35MPWM5B2PYRY6Qom0-aKm5zsgsn4fQl4AqdbxQGq9XrPAe3i-dYUNwCrkwgltH3MSIA2-BuRsdxAPh4m77_P26ux8XVfn9kqVDt5Hlwpak9ZL12ZJuUQVjrsETbjzHwD89WZbaNk29mY1wIvK9sjAOgpJ8dXRwHQ_2fmlnE60AHJ1eTyDW5Q2flJOkHwV8_ZEgDJrAgANPT49lw0EHLvaYEndIykGsjtw2JpDd14a-rKek7YqWiPzfbPH1TmNnhQhFRIUSehVZdsf42Y97OQK2bHS9dwhDA-_ITf9jFpEDteFJspDeQqtdGSAAMB_xB-V0xcuTSvWC3ta7s1Wzkfz3c7P4cJti--ZenzfIriB3KI5S2PFCJ051KraNfgazX7k1MIOfU6pmqKpD7jKtc_4FycZwB5yis8yRBVXuU8AnCk9C3ojOYQWt02vxJGjsh5PCUI59M2rBwqTemQT30H4QNtQCMfNYgcY0PmHl1wJkJnHB5tPiISBbg3-i3Znj1hHB-8RhrMNX87R5xPW6odPc2uk5SsDtNJV4fezRNFVUhJfceLdCG5WE1O5iCvJYV2eMnCOeFG9erJE2rbu1SpO61uFa6XQskRJN0W3RC0TLDJdtNTj3lADWDf3Cg5HaDn1weLhGV_PKRLPoODtdy2BQL7Wft0RmA_C13pwlJwjT-83_dfArhVJXwcJV1Dncijt_AxOWKLc=w647-h949-no?authuser=0",
    shortDescription: "This is short description",
    year: 2005,
    description:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    progressBarPercent: 0,
    duration: 125.952,
    timePlayed: 0,
    timeStarted: -1,
    starring: "Srikanth, Srikanth Kuriyala, SRKanth",
    director: "SRKanth",
    category: "Action",
    language: "Telugu"
  },
  {
    id: 5,
    title: "Movie 5",
    url: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
    banner: "https://lh3.googleusercontent.com/axi8VMGzIXsnandBtXY5Q9nDG57J8tgreCnZ_QLWmlBxvYa8dw8-dYXYOwLXQGmuOzts74g9HriwvoFRnK27eW2crqVFTvbZpw84W4QT3PK6-VHW5nIXVnaLY4hUE0HJbvLN4nH_HNM602AR0oJMGA1cObQA827xcis5XNqGzgXSd4rGOwAS8cZldRAk7SoRJ_kYC6DRyIk9vq3Hp1X1lrqDffPJEP6t4q4m8aKPkNuqZoD2HdPhs99ctweSvLJoF_nJzEjNB0DU7IN72dnd7QYcGrkF5MccslpxUz8fFy2E_tZG6DL2A26eOEk4pWRB3CtB4f30Hepb3pMsc3mq5PJTbtyH4wkGE-khZkBICI7Z8wUCyBgbAle42yowo-CpQM0gqqmZtsBepwBhBOpLlmXN1wISct5jDUPYgvL13vyaGrw7RsAjvSC10ebiWIQg92El5vtWnGobIcLzqdl-blmNTerOfmu32ebqYEgqGdXVbFAy1Yksc4tRScmSl_kezu01BIBJz57hEpDZklPDeCCZYH2zih4ZcQC5u2-62z-oEcUSApdzP87ElLRUm0wVtDQOLydihcnRtcjUZ4c0SCNatvRY8zmijI5c_faW6GXgZHyVQDn5QLfCvZ96JeB16FdUDwBh7kFQGEELRP4_BkFmDp5l1hUWNSHLNVQqVTF53KQPbjYiE2DjbQnRMxxIPRuFCjdB1D9JswM1HX3Mdxc=w1280-h720-no?authuser=0",
    poster: "https://lh3.googleusercontent.com/j1SnAqNnzqGOC35MPWM5B2PYRY6Qom0-aKm5zsgsn4fQl4AqdbxQGq9XrPAe3i-dYUNwCrkwgltH3MSIA2-BuRsdxAPh4m77_P26ux8XVfn9kqVDt5Hlwpak9ZL12ZJuUQVjrsETbjzHwD89WZbaNk29mY1wIvK9sjAOgpJ8dXRwHQ_2fmlnE60AHJ1eTyDW5Q2flJOkHwV8_ZEgDJrAgANPT49lw0EHLvaYEndIykGsjtw2JpDd14a-rKek7YqWiPzfbPH1TmNnhQhFRIUSehVZdsf42Y97OQK2bHS9dwhDA-_ITf9jFpEDteFJspDeQqtdGSAAMB_xB-V0xcuTSvWC3ta7s1Wzkfz3c7P4cJti--ZenzfIriB3KI5S2PFCJ051KraNfgazX7k1MIOfU6pmqKpD7jKtc_4FycZwB5yis8yRBVXuU8AnCk9C3ojOYQWt02vxJGjsh5PCUI59M2rBwqTemQT30H4QNtQCMfNYgcY0PmHl1wJkJnHB5tPiISBbg3-i3Znj1hHB-8RhrMNX87R5xPW6odPc2uk5SsDtNJV4fezRNFVUhJfceLdCG5WE1O5iCvJYV2eMnCOeFG9erJE2rbu1SpO61uFa6XQskRJN0W3RC0TLDJdtNTj3lADWDf3Cg5HaDn1weLhGV_PKRLPoODtdy2BQL7Wft0RmA_C13pwlJwjT-83_dfArhVJXwcJV1Dncijt_AxOWKLc=w647-h949-no?authuser=0",
    shortDescription: "This is short description",
    year: 2001,
    description:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    progressBarPercent: 0,
    duration: 125.952,
    timePlayed: 0,
    timeStarted: -1,
    starring: "Srikanth, Srikanth Kuriyala, SRKanth",
    director: "SRKanth",
    category: "Action",
    language: "Telugu"
  },
  {
    id: 6,
    title: "Movie 6",
    url: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
    banner: "https://lh3.googleusercontent.com/axi8VMGzIXsnandBtXY5Q9nDG57J8tgreCnZ_QLWmlBxvYa8dw8-dYXYOwLXQGmuOzts74g9HriwvoFRnK27eW2crqVFTvbZpw84W4QT3PK6-VHW5nIXVnaLY4hUE0HJbvLN4nH_HNM602AR0oJMGA1cObQA827xcis5XNqGzgXSd4rGOwAS8cZldRAk7SoRJ_kYC6DRyIk9vq3Hp1X1lrqDffPJEP6t4q4m8aKPkNuqZoD2HdPhs99ctweSvLJoF_nJzEjNB0DU7IN72dnd7QYcGrkF5MccslpxUz8fFy2E_tZG6DL2A26eOEk4pWRB3CtB4f30Hepb3pMsc3mq5PJTbtyH4wkGE-khZkBICI7Z8wUCyBgbAle42yowo-CpQM0gqqmZtsBepwBhBOpLlmXN1wISct5jDUPYgvL13vyaGrw7RsAjvSC10ebiWIQg92El5vtWnGobIcLzqdl-blmNTerOfmu32ebqYEgqGdXVbFAy1Yksc4tRScmSl_kezu01BIBJz57hEpDZklPDeCCZYH2zih4ZcQC5u2-62z-oEcUSApdzP87ElLRUm0wVtDQOLydihcnRtcjUZ4c0SCNatvRY8zmijI5c_faW6GXgZHyVQDn5QLfCvZ96JeB16FdUDwBh7kFQGEELRP4_BkFmDp5l1hUWNSHLNVQqVTF53KQPbjYiE2DjbQnRMxxIPRuFCjdB1D9JswM1HX3Mdxc=w1280-h720-no?authuser=0",
    poster: "https://lh3.googleusercontent.com/j1SnAqNnzqGOC35MPWM5B2PYRY6Qom0-aKm5zsgsn4fQl4AqdbxQGq9XrPAe3i-dYUNwCrkwgltH3MSIA2-BuRsdxAPh4m77_P26ux8XVfn9kqVDt5Hlwpak9ZL12ZJuUQVjrsETbjzHwD89WZbaNk29mY1wIvK9sjAOgpJ8dXRwHQ_2fmlnE60AHJ1eTyDW5Q2flJOkHwV8_ZEgDJrAgANPT49lw0EHLvaYEndIykGsjtw2JpDd14a-rKek7YqWiPzfbPH1TmNnhQhFRIUSehVZdsf42Y97OQK2bHS9dwhDA-_ITf9jFpEDteFJspDeQqtdGSAAMB_xB-V0xcuTSvWC3ta7s1Wzkfz3c7P4cJti--ZenzfIriB3KI5S2PFCJ051KraNfgazX7k1MIOfU6pmqKpD7jKtc_4FycZwB5yis8yRBVXuU8AnCk9C3ojOYQWt02vxJGjsh5PCUI59M2rBwqTemQT30H4QNtQCMfNYgcY0PmHl1wJkJnHB5tPiISBbg3-i3Znj1hHB-8RhrMNX87R5xPW6odPc2uk5SsDtNJV4fezRNFVUhJfceLdCG5WE1O5iCvJYV2eMnCOeFG9erJE2rbu1SpO61uFa6XQskRJN0W3RC0TLDJdtNTj3lADWDf3Cg5HaDn1weLhGV_PKRLPoODtdy2BQL7Wft0RmA_C13pwlJwjT-83_dfArhVJXwcJV1Dncijt_AxOWKLc=w647-h949-no?authuser=0",
    shortDescription: "This is short description",
    year: 2020,
    description:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    progressBarPercent: 0,
    duration: 125.952,
    timePlayed: 0,
    timeStarted: -1,,
    starring: "Srikanth, Srikanth Kuriyala, SRKanth",
    director: "SRKanth",
    category: "Action",
    language: "Malayalam"
  }
]

<MoviesList movies={movies}/>
```

# Attributes
`id` Unique ID of the video
`title` Video title
`url` Video source
`poster` Image source to display in listing page
`shortDescription` This is short description to display in listing page
`year` Video released year to display in listing page and Video detail page
`banner` Banner image source to display in Video detail page
`description` Video long description to display in Video detail page
`progressBarPercent` To display howmuch percentage of video is watched
`duration` Total video duration
`timePlayed` Video duration already played
`timeStarted` Time when it is started. By default send it as `-1`,
`starring` Information about cast
`director` Director name
`category` Video genre
`language` Audio language

| Left-Aligned  | Center Aligned  |
| :------------ |:---------------:|
| id      | Unique ID of the video |
| title      | Video title        |
| url | Image source to display in listing page        |