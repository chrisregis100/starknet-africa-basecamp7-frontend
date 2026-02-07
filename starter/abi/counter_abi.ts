export const COUNTER_ABI = [
  {
    type: "impl",
    name: "CounterImpl",
    interface_name: "session_1::ICounter",
  },
  {
    type: "interface",
    name: "session_1::ICounter",
    items: [
      {
        type: "function",
        name: "increase_count",
        inputs: [
          {
            name: "amount",
            type: "core::felt252",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "increase_count_by_one",
        inputs: [],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "decrease_count",
        inputs: [
          {
            name: "amount",
            type: "core::felt252",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "decrease_count_by_one",
        inputs: [],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "get_count",
        inputs: [],
        outputs: [
          {
            type: "core::felt252",
          },
        ],
        state_mutability: "view",
      },
    ],
  },
  {
    type: "event",
    name: "session_1::Counter::Event",
    kind: "enum",
    variants: [],
  },
];
