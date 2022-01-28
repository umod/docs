---
hide_table_of_contents: true
---

# OnPlayerRespawned

## Usage

* Called when the player has respawned (specifically when they click the "Respawn" button)
* ONLY called after the player has transitioned from dead to not-dead, so not when they're waking up
* This means it is possible for the player to connect and disconnect from a server without OnPlayerRespawned ever triggering for them
* No return behavior

## Examples

```csharp title=""
void OnPlayerRespawned(BasePlayer player)
{
    Puts("OnPlayerRespawned works!");
}
```
