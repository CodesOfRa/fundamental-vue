<template>
  <div>
    <FdModal name="party" ref="party" title="Modal Title">
      <template #default="{close}">
        <div>
          <p>Do you want to invite your friends to join the party?</p>
          <p>
            <fd-link href="#" @click="close">Nah…</fd-link>
            – maybe next time though.
          </p>
        </div>
      </template>
      <template #actions="{close}">
        <fd-button @click="close">Cancel</fd-button>
        <fd-button @click="close" styling="emphasized">Invite</fd-button>
      </template>
    </FdModal>
    <fd-button v-fd-open-modal:party>Show Modal</fd-button>
    <br />
    <br />
    <fd-button @click="$fdModal.open('party')">
      Show Modal using $fdModal.open(…)
    </fd-button>
  </div>
</template>
