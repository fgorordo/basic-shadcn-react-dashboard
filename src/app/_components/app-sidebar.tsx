import { Boxes, ContactRound, Home, Inbox, Newspaper, Settings, Users } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { DashboardNavigationItem, DashboardRoutes } from "@/models"
import Link from "next/link"


// Menu items.
const items: DashboardNavigationItem[] = [
  {
    title: "Inicio",
    url: DashboardRoutes.HOME,
    icon: Home,
  },
  {
    title: "Mensajes",
    url: "/"+DashboardRoutes.MESSAGES,
    icon: Inbox,
  },
  {
    title: "Contactos",
    url: "/"+DashboardRoutes.CONTACTS,
    icon: ContactRound,
  },
  {
    title: "Noticias/Articulos",
    url: "/"+DashboardRoutes.ARTICLES,
    icon: Newspaper,
  },
  {
    title: "Productos",
    url: "/"+DashboardRoutes.PRODUCTS,
    icon: Boxes,
  },
  {
    title: "Usuarios",
    url: "/"+DashboardRoutes.USERS,
    icon: Users,
  },
  {
    title: "Configuraciones",
    url: "/"+DashboardRoutes.SETTINGS,
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Administrador Web - KSQ Pergamino</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
