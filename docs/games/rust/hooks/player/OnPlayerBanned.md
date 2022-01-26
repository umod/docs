---
hide_table_of_contents: true
---

# OnPlayerBanned

## Usage

* Called when the player is banned (Facepunch, EAC, server ban, etc.)
* No Return behavior

## Examples

```csharp title=""
void OnPlayerBanned(string name, ulong id, string address, string reason)
{
    Puts("OnPlayerBanned works!");
}
```
