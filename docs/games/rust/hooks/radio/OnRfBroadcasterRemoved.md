---
hide_table_of_contents: true
---

# OnRfBroadcasterRemoved

## Usage

* Called right after an object has stopped broadcasting an RF frequency
* No return behavior

## Examples

```csharp title=""
void OnRfBroadcasterRemoved(IRFObject obj, int frequency)
{
    Puts("OnRfBroadcasterRemoved works!");
}
```
