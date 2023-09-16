import axios from 'axios';

export const getCalls = async () => {
    try {
        const token = 'testtoken';

        const config = {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        };

        const res = await axios.post(`https://api.skilla.ru/mango/getList?sort_by=date&limit=100`, {}, config)

        return res.data.results
    } catch (error) {
        console.log(error)
    }
}

export const getRecord = async (recordId: string) => {
    try {
        const token = 'testtoken';

        const config = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-type': 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3',
                'Content-Transfer-Encoding': 'binary',
                'Content-Disposition': 'filename="record.mp3"'
            },
        };

        const res = await axios.post(`https://api.skilla.ru/mango/getRecord?record=${recordId}`, {}, config)

        // const blob = new Blob([res.data], { type: 'audio/mp3' });
        // const url = URL.createObjectURL(blob)

        return res.data
    } catch (error) {
        console.log(error)
    }
}