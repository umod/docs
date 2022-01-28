---
hide_table_of_contents: true
---

# OnPlayerCorpse

## Usage

* Called when a non-null corpse has just been spawned
* No return behavior

## Examples

```csharp title=""
void OnPlayerCorpse(BasePlayer player, BaseCorpse corpse)
{
    Puts($"A corpse for {player.displayName} has just been spawned!");
}
```
