import { AddIcon, AddIconColor } from '../components/elements/icons/AddIcon'
import Button, { ButtonTheme } from '../components/elements/Button/Button'
import { DatePicker } from '../components/elements/DatePicker/DatePicker'
import { FiltersAndSearch } from '../components/modules/FiltersAndSearch/FiltersAndSearch'
import style from './page.module.scss'
import { Calls } from '../components/modules/Calls/Calls'
import { getCalls } from '@/utils/api'

export default async function Home() {
    const calls = await getCalls()

    return (
        <main className={style.main}>
            <div className={style.balanceAndDatePicker}>
                <Button theme={ButtonTheme.BALANCE}>
                    <p>Баланс <span className={style.balance}>272 ₽</span></p>
                    <AddIcon color={AddIconColor.BLUE}/>
                </Button>
                <DatePicker/>
            </div>

            <FiltersAndSearch/>

            <Calls calls={calls}/>

        </main>
    )
}
