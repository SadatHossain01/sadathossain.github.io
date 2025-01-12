<script lang="ts">
	import type { Blog } from '$lib/data/types';
	import { getMonthAndYear, href } from '$lib/utils';
	import { ellipsify } from '@riadh-adrani/utils';
	import Badge from '../ui/badge/badge.svelte';
	import { CardHeader } from '../ui/card';
	import CardContent from '../ui/card/card-content.svelte';
	import CardFooter from '../ui/card/card-footer.svelte';
	import CardTitle from '../ui/card/card-title.svelte';
	import FancyCard from '../ui/card/fancy-card.svelte';
	import Icon from '../ui/icon/icon.svelte';
	import Separator from '../ui/separator/separator.svelte';
	import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
	import Muted from '../ui/typography/muted.svelte';

	const { blog }: { blog: Blog } = $props();

	let time = $derived(getMonthAndYear(blog.date));
</script>

<FancyCard color={blog.color} class="flex h-full flex-col" href={href(`/blogs/${blog.slug}`)}>
	<CardHeader class="flex w-full flex-col gap-4">
		<div class="flex w-full flex-row items-center gap-1 overflow-x-hidden">
			<CardTitle class="h-auto min-w-0 flex-1 overflow-x-hidden">
				<Tooltip>
					<TooltipTrigger
						class="w-full overflow-y-auto overflow-x-hidden truncate text-ellipsis text-nowrap text-left"
					>
						{blog.name}
					</TooltipTrigger>
					<TooltipContent>{blog.name}</TooltipContent>
				</Tooltip>
			</CardTitle>
		</div>
		<Separator />
	</CardHeader>
	<CardContent class="flex flex-1 flex-col gap-4">
		<Muted className="flex flex-row gap-2 items-center">
			<Icon icon="i-carbon-assembly-cluster" />
			<Muted>{blog.type}</Muted>
		</Muted>
		<Muted className="flex-1">{ellipsify(blog.shortDescription, 100)}</Muted>
		<div class="flex w-full flex-row items-center justify-between">
			<Badge variant="outline">{time}</Badge>
		</div>
		<Separator />
	</CardContent>
	<CardFooter class="flex flex-row flex-wrap items-center gap-2">Insert Tags Here</CardFooter>
</FancyCard>
