---
hide_table_of_contents: true
---

# OnNetworkGroupLeft

## Usage

* Called after a player has left a network group
* No return behavior

## Examples

```csharp title=""
void OnNetworkGroupLeft(BasePlayer player, Network.Visibility.Group group)
{
    Puts("OnNetworkGroupLeft works!");
}
```
