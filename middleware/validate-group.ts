import { groups } from '@/utils/group-config';

export default defineNuxtRouteMiddleware((to) => {
	const groupId = to.params.groupId
	const path = to.path

	if (path === '/policy') return

	if (!groups[groupId as keyof typeof groups]) {
		return abortNavigation()
	}
})
