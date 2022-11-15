import { AlertColor } from '@mui/material'
import { SvgIconComponent } from '@mui/icons-material'
import { Course, Lesson } from './course'

export type AlertState = {
  message: string
  status: AlertColor
  isOpen: boolean
}

export type ScrollData<T> = {
  hidden: T[]
  displayed: T[]
}

export type SidebarMenuItem = {
  title: string
  href: string
  Icon: SvgIconComponent
}

export type CourseTableColumnId = keyof Omit<Course, 'classes'> | keyof Lesson

export type CourseTableColumn = {
  id: CourseTableColumnId
  label: string
  isSortable: boolean
}