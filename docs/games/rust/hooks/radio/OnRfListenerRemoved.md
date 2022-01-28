---
hide_table_of_contents: true
---

# OnRfListenerRemoved

## Usage

* Called right after an object has stopped listening to an RF frequency
* No return behavior

## Examples

```csharp title=""
void OnRfListenerRemoved(IRFObject obj, int frequency)
{
    Puts("OnRfListenerRemoved works!");
}
```
