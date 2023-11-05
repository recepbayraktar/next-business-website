
import { useTranslation } from '@/app/i18n'
import React from 'react'


const Page = async ({ params: { lang } }: { params: { lang: string } }) => {
  const { t } = await useTranslation(lang, 'services')

  return (
    <div>
      {t('title')}

    </div>
  )
}

export default Page