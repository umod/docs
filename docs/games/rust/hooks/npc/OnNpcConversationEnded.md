---
hide_table_of_contents: true
---

# OnNpcConversationEnded

## Usage

* Called right after a player has ended an NPC conversation
* No Return behavior

## Examples

```csharp title=""
void OnNpcConversationEnded(NPCTalking npcTalking, BasePlayer player)
{
    Puts("OnNpcConversationEnded works!");
}
```
